import React, {useState} from 'react';
import Board from '../../components/Board';
import Switch from '../../components/Switch';
import {calculateWinner} from '../../utils';


function Game(props) {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [orderAsc, setOrderAsc] = useState(true);

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const handlerClick = (i) => {
        const historyCopy = history.slice(0, stepNumber + 1);
        const current = historyCopy[historyCopy.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares)[0] || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(historyCopy.concat([{squares}]));
        setXIsNext(prevXIsNext => !prevXIsNext);
        setStepNumber(historyCopy.length);
    }
    const handlerOrderChange = () => {
        setOrderAsc(prevOrderAsc => !prevOrderAsc);
    }

    const historyCopy = history.slice();
    const current = historyCopy[stepNumber];
    const [winner, lines] = calculateWinner(current.squares);

    const moves = historyCopy.map((step, move) => {
        const length = historyCopy.length - 1;
        if (!orderAsc) {
            move = length - move;
        }
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button
                    className={stepNumber === move ? "font-bold" : ""}
                    onClick={() => jumpTo(move)}
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
        if (historyCopy.length === 10) {
            status = 'Juego empatado.'
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={handlerClick}
                    winLine={lines}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <div>
                    <Switch value={!orderAsc} onChange={handlerOrderChange}/>
                </div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;