function Square(props) {
    return (
        <button
            className={"square color-" + props.status + (props.win ? " square-win": "")}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;
