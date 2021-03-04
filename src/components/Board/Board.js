import React from 'react';
import Square from '../Square';


function Board({squares, winLine, onClick}) {
    const renderSquare = (i) => {
        const value = squares[i];
        return (
            <Square
                key={i}
                value={value}
                onClick={() => onClick(i)}
                status={value === "X" ? "x" : "o"}
                win={winLine ? winLine.includes(i) : false}
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
