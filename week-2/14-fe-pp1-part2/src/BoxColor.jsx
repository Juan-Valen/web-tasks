function BoxColor(props) {
    const style = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        border: '1px solid black',
        padding: '18px',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '5px',
    }
    return (
        <div style={style}>
            <strong>{`rgb(${props.r},${props.g},${props.b})`}</strong>
            <strong>{`#${parseInt(props.r,16)},${parseInt(props.g,16)},${parseInt(props.b,16)}`}</strong>
        </div>
    );
};

export default BoxColor;
