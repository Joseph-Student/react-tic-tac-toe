import React from 'react';
import Square from '../Square';


function Board(props) {
    const renderSquare = (i) => {
        const value = props.squares[i];
        return (
            <Square
                key={i}
                value={value}
                onClick={() => props.onClick(i)}
                status={value === "X" ? "x" : "o"}
                win={props.winLine ? props.winLine.includes(i) : false}
            />
        )
    }
    let rows = [];
    let k = 0;
    for (let i = 0; i < 3; i++) {
        let columns = [];
        for (let j = k; j < k + 3; j++) {
            columns.push(renderSquare(j));
        }
        rows.push(<div key={i} className="board-row">{columns}</div>)
        k += 3;
    }
    return <div className="board">{rows}</div>;
}

export default Board;
