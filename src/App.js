import {useEffect, useState} from "react";
import {winnerPossibilities} from "./winnerPosibilities";
import Modal from "./components/Modal";

const list = new Array(9).fill('');

const App = () => {
    const [cellsSelected, setCellsSelected] = useState(list);
    const [selected, setSelected] = useState('x');
    const [counter, setCounter] = useState({cross: 0, circle: 0});
    const [winnerCells, setWinnerCells] = useState([]);
    const [winner, setWinner] = useState(null);

    const getWinner = (cells) => {
        for (let i in winnerPossibilities) {
            winnerPossibilities[i].forEach(pattern => {
                if (
                    cells[pattern[0]] === '' ||
                    cells[pattern[1]] === '' ||
                    cells[pattern[2]] === ''
                ) return

                if (cells[pattern[0]] === cells[pattern[1]] && cells[pattern[1]] === cells[pattern[2]]) {
                    console.log(pattern)
                    setWinnerCells(pattern)
                    setWinner(cells[pattern[0]]);
                }
            })
        }
    }

    const handleCount = () => {
        const {cross, circle} = counter;
        if (winner) {
            if (selected === 'o') setCounter({...counter, cross: cross + 1});
            else setCounter({...counter, circle: circle + 1});
        }
    }

    const handleReset = (all) => {
        setWinner(null);
        setSelected('x');
        setCellsSelected(list);
        if (all) setCounter({cross: 0, circle: 0})
    }

    const handleClick = (i) => {
        const localCells = [...cellsSelected];

        if (cellsSelected[i] !== '') return;

        if (selected === 'x') {
            localCells[i] = 'x';
            setSelected('o')
        } else {
            localCells[i] = 'o';
            setSelected('x')
        }

        getWinner(localCells)
        setCellsSelected(localCells)
    }

    useEffect(() => {
        if (winner) handleCount();
    }, [winner])

    return (
        <>
            <div className="header">
                <div className='coso'>
                    <span>x</span>
                    <span>o</span>
                </div>

                <button className='turn'>
                    <span>{selected}</span> turn
                </button>

                <button className='reset' onClick={handleReset}>
                    <i className="fa-solid fa-arrow-rotate-right"/>
                </button>
            </div>

            <div className='container'>
                {
                    list.map((l, index) => {
                        let winnerClass = winnerCells.includes(index);

                        return <div
                            key={index}
                            className={`cell
                            ${winnerClass && winner === 'o' && 'winner-cell-o'} 
                            ${winnerClass && winner === 'x' && 'winner-cell-x'}`}
                            onClick={() => handleClick(index)}
                        >
                            <span className={cellsSelected[index] === 'x' ? 'symbol-x' : 'symbol-o'}>
                                {cellsSelected[index]}
                            </span>
                        </div>
                    })
                }
            </div>

            <div className="footer">
                <div>
                    <h6>x (you)</h6>
                    <span>{counter.cross}</span>
                </div>

                <div>
                    <h6>Ties</h6>
                    <span>0</span>
                </div>

                <div>
                    <h6>o (cpu)</h6>
                    <span>{counter.circle}</span>
                </div>
            </div>

            {
                winner && <Modal handleReset={handleReset} winner={winner}/>
            }
        </>
    );
}

export default App;
