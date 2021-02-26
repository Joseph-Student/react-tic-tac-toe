import React from 'react';
import Square from '../Square';

class Board extends React.PureComponent {
    renderSquare(i) {
        const value = this.props.squares[i];
        return (
            <Square
                key={i}
                value={value}
                onClick={() => this.props.onClick(i)}
                status={value === "X" ? "x": "o"}
                win={this.props.winLine ? this.props.winLine.includes(i): false}
            />
        );
    }

    render() {
        let rows = [];
        let k = 0;
        for (let i = 0; i < 3; i++) {
            let columns = [];
            for (let j = k; j < k + 3; j++) {
                columns.push(this.renderSquare(j));
            }
            rows.push(<div key={i} className="board-row">{columns}</div>)
            k += 3;
        }
        return <div className="board">{rows}</div>;
    }
}

export default Board;
