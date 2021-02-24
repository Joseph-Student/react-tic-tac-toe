import React from 'react';
import Board from '../../components/Board';
import Switch from '../../components/Switch';
import calculateWinner from '../../utils';

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
        if (calculateWinner(squares)[0] || squares[i]) {
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
        const [winner, lines] = calculateWinner(current.squares);

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
            if (history.length === 10) {
                status = 'Juego empatado.'
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handlerClick(i)}
                        winLine={lines}
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

export default Game;