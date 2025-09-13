import Timer from "./Timer";

export function checkWinningCondition(map, setGameOver) {
    if (!map.some((row) => row.includes(2))) {
        setGameOver(true);
        alert("Congratulations! You collected all the coins. You win!");
        // Additional logic for restarting the game or other actions
    } else if (!map.some((row) => row.includes(4))) {
        setGameOver(true);
        alert("Game over !! You collided with the ghost");
        // Additional logic for restarting the game or other actions
    }
}

