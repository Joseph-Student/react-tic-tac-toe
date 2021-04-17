import HistoryItem from "../HistoryItem";

function History({history, orderAsc, stepNumber, onClick}) {
    return history.map((step, move) => {
        const length = history.length - 1;
        if (!orderAsc) {
            move = length - move;
        }
        const text = move ? 'Go to move #' + move : 'Go to game start';
        const className = stepNumber === move ? "font-bold" : "";
        return <HistoryItem
            key={move}
            className={className}
            onClick={onClick}
            text={text}
            index={move}
        />
    })
}

export default History;