import React, {useEffect, useState} from "react";
import ModalWinner from "./components/Modal/ModalWinner";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import { getWinner } from "./helpers/winnerPosibilities";

const list = new Array(9).fill('');
const initialCounter = { cross: 0, circle: 0, ties: 0 };
const initialWinner = { winner: null, pattern: [] };

const App = () => {
    const [cellsSelected, setCellsSelected] = useState(list);
    const [selected, setSelected] = useState('x');
    const [counter, setCounter] = useState(initialCounter);
    const [winnerState, setWinnerState] = useState(initialWinner);

    const { winner } = winnerState;

    const handleCount = () => {

        const {cross, circle, ties} = counter;

        if (winner) {
            if (selected === 'o')
                setCounter({...counter, cross: cross + 1, ties: ties + 1});
            else
                setCounter({...counter, circle: circle + 1, ties: ties + 1});
        }
    }

    const handleReset = (all) => {
        setWinnerState({...winnerState, winner: null });
        setSelected('x');
        setCellsSelected(list);
        if (all) setCounter(initialCounter)
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

        getWinner(localCells, setWinnerState);
        setCellsSelected(localCells)
    }

    useEffect(() => {
        if (winner) handleCount();
    }, [winner])

    return (
        <>
            <Header
                selected={selected}
                handleReset={handleReset}
            />

            <Container
                list={list}
                winnerState={winnerState}
                cellsSelected={cellsSelected}
                handleClick={handleClick}
            />

            <Footer
                counter={counter}
            />

            { winner && <ModalWinner handleReset={ handleReset } winner={ winner } /> }
        </>
    );
}

export default App;
