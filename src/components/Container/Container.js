import React from "react";
import classNames from "classnames";

import './container.css';

const Container = ({ list, winnerState, cellsSelected, handleClick}) => {

    const {winner, pattern} = winnerState;

    const cellClasses = (winnerClass) => classNames({
        cell: 'cell',
        'winner-cell-o': winnerClass && winner === 'o',
        'winner-cell-x': winnerClass && winner === 'x'
    })

    const symbolClasses = (cell) => classNames({
        'symbol-x': cell === 'x',
        'symbol-o': cell === 'o'
    })

    return (
        <div className='container'>
            {
                list.map((l, index) => (
                    <div
                        key={index}
                        className={cellClasses(pattern.includes(index))}
                        onClick={() => handleClick(index)}
                    >
                        <span className={symbolClasses(cellsSelected[index])}>
                            {cellsSelected[index]}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Container;