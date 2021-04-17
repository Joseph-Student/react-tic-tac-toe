function Square({status, win, onClick, value}) {
    const className = "square color-" + status + (win ? " square-win" : "")
    return (
        <button
            color="link"
            className={className}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;
