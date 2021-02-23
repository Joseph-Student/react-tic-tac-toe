import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
    return (
        <button
            className={"square color-" + props.status}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

function Switch(props) {
    return (
        <label htmlFor="idOrder">
            <input
                id="idOrder" type="checkbox" name="order"
                aria-label="Ordenar movimientos descendentemente?" aria-required="false"
                checked={props.value} onChange={props.onChange}/>
            {"Ordenar movimientos descendentemente?"}
        </label>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        const value = this.props.squares[i];
        return (
            <Square
                key={i}
                value={value}
                onClick={() => this.props.onClick(i)}
                status={value === "X" ? "x": "o"}
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

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
            orderAsc: true,
        }
    }

    handlerClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
            history: history.concat([{
                squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })

    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    handlerOrderChange() {
        this.setState({
            orderAsc: !this.state.orderAsc,
        })
    }

    render() {
        const history = this.state.history.slice();
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const  length = history.length - 1;
            if (!this.state.orderAsc) {
                move = length - move;
            }
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                    <button
                        className={this.state.stepNumber === move ? "font-bold": ""}
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handlerClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>
                        <Switch value={!this.state.orderAsc} onChange={() => {this.handlerOrderChange()}} />
                    </div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
