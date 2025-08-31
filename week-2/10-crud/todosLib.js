let todos = [];
let nextId = 1;


function getAll() {
    return todos;
}

function addOne(task, completed, dueDate) {
    if (!task || completed == undefined || !dueDate) {
        return false;
    }
    const newToDo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todos.push(newToDo);
    return newToDo;
}

function findById(id) {
    const numericId = Number(id);
    const todo = todos.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedContent) {
    const todo = findById(id);
    if (todo) {
        if (updatedContent.task) todo.task = updatedContent.task;
        if (updatedContent.completed) todo.completed = updatedContent.completed;
        if (updatedContent.dueDate) todo.dueDate = updatedContent.dueDate;
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todos.length;
        todos = todos.filter(item => item.id !== Number(id));
        return todos.length < initialLength;
    }
    return false;
}


if (require.main === module) {
    // Add cars
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Finnish project", true, "2025-08-30");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { completed: true, dueDate: "2025-09-03" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}


const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
