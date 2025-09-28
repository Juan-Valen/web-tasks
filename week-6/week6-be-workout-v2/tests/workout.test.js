const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

const workoutsInDb = async () => {
    const workouts = await Workout.find({});
    return workouts.map((workout) => workout.toJSON());
    //    return await api
    //        .get("/api/workouts")
    //        .set("Authorization", "bearer " + token)
};

let token = null;

beforeAll(async () => {
    await User.deleteMany({});
    const result = await api
        .post("/api/user/signup")
        .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
    token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
    beforeEach(async () => {
        await Workout.deleteMany({});
        await api
            .post("/api/workouts")
            .set("Authorization", "bearer " + token)
            .send(workouts[0])
            .send(workouts[1]);
    });

    it("Workouts are returned as json", async () => {
        await api
            .get("/api/workouts")
            .set("Authorization", "bearer " + token)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });

    it("New workout added successfully", async () => {
        const newWorkout = {
            title: "testworkout",
            reps: 10,
            load: 100,
        };
        await api
            .post("/api/workouts")
            .set("Authorization", "bearer " + token)
            .send(newWorkout)
            .expect(201);
    });
    it("Workout is returned by id", async () => {
        const list = await workoutsInDb();
        const id = list[0]._id;

        await api
            .get(`/api/workouts/${id}`)
            .set("Authorization", "bearer " + token)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
    it("Workout updated successfully", async () => {
        const list = await workoutsInDb();
        const id = list[0]._id;
        const newWorkout = {
            title: "unauthorized workout",
            reps: 15,
            load: 80,
        };

        await api
            .put(`/api/workouts/${id}`)
            .set("Authorization", "bearer " + token)
            .send(newWorkout)
            .expect(200);
    });

    it("Workout deleted successfully", async () => {
        const list = await workoutsInDb();
        const id = list[0]._id;

        await api
            .delete(`/api/workouts/${id}`)
            .set("Authorization", "bearer " + token)
            .expect(204);
    });
});

afterAll(() => {
    mongoose.connection.close();
});
