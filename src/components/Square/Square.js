function Square(props) {
    const className = "square color-" + props.status + (props.win ? " square-win" : "")
    return (
        <button
            className={className}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;
