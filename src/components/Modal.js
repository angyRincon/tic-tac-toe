const Modal = ({ handleReset, winner }) => {

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h6>you won!</h6>
                </div>

                <div className={` modal-body ${ winner === 'x' ? 'winner-x' : 'winner-o'} `} >
                    <span>{winner}</span>
                    <span>takes the round</span>
                </div>

                <div className='modal-footer'>
                    <button onClick={() => handleReset(true)}>quit</button>
                    <button
                        className={`${winner === 'x' ? 'winner-x' : 'winner-o' }`}
                        onClick={() => handleReset(false)}
                    >
                        next round
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;