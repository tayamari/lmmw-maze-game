import React, { useState, useEffect } from "react";
import wall from "../assets/sprites/bush.png";
import { randomIngredients, randomCritter } from './AssetRendering.jsx';
import players from "../assets/sprites/basket_player.png";
import "./GameBoard.css";
import { checkWinningCondition } from './GameConditions.jsx';
import Timer from "./Timer";

const initialMap = [
    /*[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],*/
    [3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3],
    [3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3],
    [3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3],
    [3, 3, 3, 1, 1, 1, 1, 3, 3, 3], // Player will be added at initialMap[3][5]
    [3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3],
    [3, 1, 1, 3, 3, 1, 3, 3, 1, 1, 3],
    [3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3],
    /*[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],*/
]

// Selecting 5 random locations on the gameboard
const indices = Array.from({ length: initialMap.length * initialMap[0].length }, (_, i) => i);
const shuffled = indices.sort(() => 0.5 - Math.random());
const selectedLocations = shuffled.slice(0, 5);
const locations = selectedLocations.map(index =>
({
    row: Math.floor(index / initialMap[0].length),
    col: index % initialMap[0].length
}));

// Assigning values in the GameBoard to each of the random locations
for (let i = 0; i <= 4; i++) {

    // skip player location for now
    if (i == 1) {
        continue;
    }

    initialMap[locations[i].row][locations[i].col] = i + 4;
}

// Adding player to GameBoard
initialMap[3].splice(5, 0, 5);

// Adding left and right hedge rows
for (let i = 0; i < initialMap.length; i++) {
    initialMap[i].splice(0, 0, 1);
    initialMap[i].push(1);
}

// Adding top hedge row
initialMap.splice(0, 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

// Adding bottom hedge row
initialMap.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);


const initialPlayer = { x: 6, y: 4 };

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [player, setPlayer] = useState(initialPlayer);
    const [map, setMap] = useState(initialMap);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [timerKey, setTimerKey] = useState(0); // For resetting Timer

    // Movement logic
    const handleKeyDown = (event) => {
        if (!gameStarted || gameOver) return;

        let newX = player.x;
        let newY = player.y;

        if (event.keyCode === 37 && player.x > 0 && map[player.y][player.x - 1] !== 1) { // Left
            newX -= 1;
        } else if (event.keyCode === 38 && player.y > 0 && map[player.y - 1][player.x] !== 1) { // Up
            newY -= 1;
        } else if (event.keyCode === 39 && player.x < map[0].length - 1 && map[player.y][player.x + 1] !== 1) { // Right
            newX += 1;
        } else if (event.keyCode === 40 && player.y < map.length - 1 && map[player.y + 1][player.x] !== 1) { // Down
            newY += 1;
        } else {
            return;
        }

        // Check if Pacman moves onto an ingredient (cell === 2)
        if (map[newY][newX] === 6 || map[newY][newX] === 7 || map[newY][newX] === 8) {
            setScore(prev => prev + Math.floor(Math.random() * 5) + 1); // Increase score
            const newMap = map.map((row, rowIdx) =>
                rowIdx === newY
                    ? row.map((cell, colIdx) => (colIdx === newX ? 3 : cell))
                    : row
            );
            setMap(newMap);
        } else if (map[newY][newX] === 4) {
            setScore(prev => prev + Math.floor(Math.random() * -5) - 1); // Decrease score
            const newMap = map.map((row, rowIdx) =>
                rowIdx === newY
                    ? row.map((cell, colIdx) => (colIdx === newX ? 3 : cell))
                    : row
            );
            setMap(newMap);
        }

        // Create a new map with updated position
        const newMap = map.map(row => [...row]);
        newMap[player.y][player.x] = 3;  // Mark old position as ground
        newMap[newY][newX] = 5;          // Mark new position as Pacman

        setPlayer({ x: newX, y: newY });
        setMap(newMap);
        checkWinningCondition(newMap, setGameOver);
    };

    // Keyboard event only when game started and not over
    useEffect(() => {
        if (!gameStarted || gameOver) return;
        const handleKeyDownEvent = (event) => handleKeyDown(event);
        document.addEventListener("keydown", handleKeyDownEvent);
        return () => document.removeEventListener("keydown", handleKeyDownEvent);
    }, [handleKeyDown, gameStarted, gameOver]);

    // Start game handler
    const handleStart = () => {
        setScore(0);
        setPlayer(initialPlayer);
        setMap(initialMap);
        setGameOver(false);
        setGameStarted(true);
        setTimerKey(prev => prev + 1); // Reset timer
    };

    return (
        <div id="world" style={{ /*backgroundColor: "white",*/ padding: "24px 0" }}>
            <div className="score-timer-bar">
                <span>Score: {score}</span>
                <span>
                    Time:{" "}
                    <Timer
                        key={timerKey}
                        duration={45}
                        gameOver={gameOver || !gameStarted}
                    />
                </span>
            </div>
            {/* Game Map always visible, but overlay when not started */}
            <div style={{ width: "650px", margin: "0 auto", position: "relative" }}>
                {/* Overlay when not started */}
                {!gameStarted && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(255,255,255,0.8)",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#232323",
                            borderRadius: "12px"
                        }}
                    >
                        <button className="startButton" onClick={handleStart}>
                            Start Game
                        </button>
                    </div>
                )}
                {/* The map itself */}
                {map.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex" }}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={
                                    cell === 1
                                        ? "wall"
                                        : cell === 3
                                            ? "ground"
                                            : cell === 4
                                                ? "randomCritter"
                                                : cell === 5
                                                    ? "players"
                                                    : cell === 6
                                                        ? "randomIngredient"
                                                        : cell === 7
                                                            ? "randomIngredient"
                                                            : cell === 8
                                                                ? "randomIngredient"
                                                                : null
                                }
                                style={
                                    cell === 1
                                        ? { backgroundImage: `url(${wall})` }
                                        : cell === 3
                                            ? { backgroundColor: "#f7cfe3ff" }
                                            : cell === 4
                                                ? { backgroundImage: `url(${randomCritter})` }
                                                : cell === 5
                                                    ? { backgroundImage: `url(${players})` }
                                                    : cell === 6
                                                        ? { backgroundImage: `url(${randomIngredients[0]})` }
                                                        : cell === 7
                                                            ? { backgroundImage: `url(${randomIngredients[1]})` }
                                                            : cell === 8
                                                                ? { backgroundImage: `url(${randomIngredients[2]})` }
                                                                : null
                                }
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameBoard;