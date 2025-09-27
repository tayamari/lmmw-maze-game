export function checkWinningCondition(map, setGameOver) {
    if (!map.some((row) => row.includes(6)) && !map.some((row) => row.includes(7)) && !map.some((row) => row.includes(8))) {
        setGameOver(true);
        alert("Congratulations! You picked the rest of the needed ingredients for Granny B's elixir. You win!");
        // Additional logic for restarting the game or other actions
    } else if (!map.some((row) => row.includes(4))) {
        setGameOver(true);
        alert("Game over!! You ran into a moosebear...Try again!");
        // Additional logic for restarting the game or other actions
    }
}

