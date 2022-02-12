const winnerPossibilities = {
    horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ],

    vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ],

    diagonal: [
        [6, 4, 2],
        [0, 4, 8]
    ]
}

export const getWinner = (cells, setWinner) => {
    for (let i in winnerPossibilities) {
        winnerPossibilities[i].forEach(pattern => {
            if (
                cells[pattern[0]] === '' ||
                cells[pattern[1]] === '' ||
                cells[pattern[2]] === ''
            ) return

            if (cells[pattern[0]] === cells[pattern[1]] && cells[pattern[1]] === cells[pattern[2]]) {
                setWinner({
                    winner: cells[pattern[0]],
                    pattern
                })
            }
        })
    }
}