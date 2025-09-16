export function checkWinningCondition(map, setGameOver) {
    if (!map.some((row) => row.includes(2))) {
        setGameOver(true);
        alert("Congratulations! You picked the correct remaining ingredients for the elixir and can now make it for Granny B. You win!");
        // Additional logic for restarting the game or other actions
    } else if (!map.some((row) => row.includes(4))) {
        setGameOver(true);
        alert("Game over!! You picked up an in item that does not belong in this elixir...Try again!");
        // Additional logic for restarting the game or other actions
    }
}

