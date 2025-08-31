function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function Random(props) {
    const random = getRandomInt(props.min, props.max)
    return (
        <p className="random">Random value between {props.min} and {props.max} => {random}</p>
    );
};

export default Random;
