export function checkWinningCondition(map, setGameOver) {
    if (!map.some((row) => row.includes(6)) && !map.some((row) => row.includes(7)) && !map.some((row) => row.includes(8))) {
        setGameOver(true);
        alert("YES! You did it! You picked the rest of the ingredients for Granny B's elixir. You win!");
        // Additional logic for restarting the game or other actions
    } else if (!map.some((row) => row.includes(4))) {
        setGameOver(true);
        alert("Oh no, you ran into a moosebear...GAME OVER! Try again!");
        // Additional logic for restarting the game or other actions
    }
}

