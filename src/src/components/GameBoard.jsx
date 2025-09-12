import React, { useState, useEffect } from "react";
import wall from "../assets/sprites/bush.png";
import coin from "../assets/sprites/garlic.png";
import pacmann from "../assets/sprites/milk-bottle.png";
{/*import bg from "./assets/bg.png";*/}
import ghost from "../assets/sprites/crab.png";

import "./GameBoard.css"

const GameBoard = () => {
    // State for PacMan position and game map
    const [pacman, setPacman] = useState({ x: 6, y: 4 });
    const [map, setMap] = useState([
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);

    // Values to pseudo-randomly add to above matrix
    // Exit value - to present in the matrix: 0, somewhere along the GameBoard wall
    // Values for 2-3 "negative" items and 2-3 "positive" items
  
    const [gameOver, setGameOver] = useState(false);
    // Function to handle PacMan movement
    const handleKeyDown = (event) => {
    if (gameOver) return;

    let newX = pacman.x;
    let newY = pacman.y;

    // Directional movement
    if (event.keyCode === 37 && pacman.x > 0 && map[pacman.y][pacman.x - 1] !== 1) { // Left
        newX -= 1;
    } else if (event.keyCode === 38 && pacman.y > 0 && map[pacman.y - 1][pacman.x] !== 1) { // Up
        newY -= 1;
    } else if (event.keyCode === 39 && pacman.x < map[0].length - 1 && map[pacman.y][pacman.x + 1] !== 1) { // Right
        newX += 1;
    } else if (event.keyCode === 40 && pacman.y < map.length - 1 && map[pacman.y + 1][pacman.x] !== 1) { // Down
        newY += 1;
    } else {
        return; // Invalid move
    }

    // Create a new map with updated position
    const newMap = map.map(row => [...row]); // Deep clone
    newMap[pacman.y][pacman.x] = 3;  // Mark old position as ground
    newMap[newY][newX] = 5;          // Mark new position as Pacman

    // Update state and check for winning condition
    setPacman({ x: newX, y: newY });
    setMap(newMap);
    checkWinningCondition(newMap);
};

    // Function to check for winning condition and collision detection
    const checkWinningCondition = () => {
        if (!map.some((row) => row.includes(2))) {
            setGameOver(true);
            alert("Congratulations! You collected all the coins. You win!");
            // Additional logic for restarting the game or other actions
        } else if (!map.some((row) => row.includes(4))) {
            setGameOver(true);
            alert("Game over !! You collided with the ghost");
            // Additional logic for restarting the game or other actions
        }
    };

    // Initial rendering
    useEffect(() => {
        const handleKeyDownEvent = 
            (event) => handleKeyDown(event);

        document.addEventListener("keydown", handleKeyDownEvent);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyDownEvent);
        };
    }, [handleKeyDown]);

    return (
        <div id="world" style={{ backgroundColor: "white" }}>
            {/* Render the game map */}
            {map.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            className={
                                cell === 1
                                ? "wall"
                                : cell === 2
                                ? "coin"
                                : cell === 3
                                ? "ground"
                                : cell === 4
                                ? "ghost"
                                : cell === 5
                                ? "pacman"
                                : null
                            }
                            style={
                                cell === 1
                                    ? { backgroundImage: `url(${wall})` }
                                    : cell === 2
                                    ? { backgroundImage: `url(${coin})` }
                                    : cell === 3
                                    ? {  }
                                    : cell === 4
                                    ? { backgroundImage: `url(${ghost})` }
                                    : cell === 5
                                    ? { backgroundImage: `url(${pacmann})` }
                                    : null
                            }
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;