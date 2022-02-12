import React from "react";
import classNames from "classnames";

import './modalWinner.css';

const ModalWinner = ({handleReset, winner}) => {

    const modalSymbolsClasses = classNames({
        'symbol-x': winner === 'x',
        'symbol-o': winner === 'o'
    })

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h6>you won!</h6>
                </div>

                <div className={classNames('modal-body', modalSymbolsClasses)}>
                    <span>{winner}</span>
                    <span>takes the round</span>
                </div>

                <div className='modal-footer'>
                    <button onClick={() => handleReset(true)}>quit</button>
                    <button
                        className={modalSymbolsClasses}
                        onClick={() => handleReset(false)}
                    >
                        next round
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalWinner;