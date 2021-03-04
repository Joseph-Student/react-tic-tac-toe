import React, {useState, useMemo, useCallback} from 'react';
import Board from '../../components/Board';
import Switch from '../../components/Switch';
import {calculateWinner} from '../../utils';
import History from "../../components/History";


function Game(props) {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [orderAsc, setOrderAsc] = useState(true);

    const jumpTo = useCallback((step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }, []);

    const handlerClick = useCallback((i) => {
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
    }, [history, stepNumber]);
    const handlerOrderChange = useCallback(() => {
        setOrderAsc(prevOrderAsc => !prevOrderAsc);
    }, []);

    const current = history[stepNumber];
    const [winner, lines] = calculateWinner(current.squares);

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        if (history.length === 10) {
            status = 'Juego empatado.'
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
    }
    return (
        <div className="game">
            <div className="game-board">
                {useMemo(() => (
                    <Board
                        squares={current.squares}
                        onClick={handlerClick}
                        winLine={lines}
                    />
                ), [current.squares, lines])}
            </div>
            <div className="game-info">
                <div>{status}</div>
                <div>
                    {useMemo(() => (
                        <Switch
                            value={!orderAsc}
                            onChange={handlerOrderChange}/>
                        ),
                        [orderAsc, handlerOrderChange])}
                </div>
                <ol>
                    <History
                        history={history}
                        orderAsc={orderAsc}
                        stepNumber={stepNumber}
                        onClick={jumpTo}
                    />
                </ol>
            </div>
        </div>
    );
}

export default Game;