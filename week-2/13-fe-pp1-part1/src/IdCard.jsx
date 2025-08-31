function IdCard(props) {
    return (
        <div className="IdCard">
            <img alt="alt" src={props.picture}/>
            <div>
                <p><b>First Name</b>: {props.firstName} </p>
                <p><b>Last Name</b>: {props.lastName} </p>
                <p><b>Gender</b>: {props.gender} </p>
                <p><b>Height</b>: {props.height*0.01} m </p>
                <p><b>Birth</b>: {props.birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;
