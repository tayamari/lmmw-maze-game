import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Game</h1>
        <p>
          Welcome to our exciting maze adventure game! This project is part of our Spring 2025 
          capstone development, where we're creating an interactive gaming experience using React.
        </p>
        <div className="game-features">
          <h2>Game Features</h2>
          <ul>
            <li>Interactive maze navigation</li>
            <li>Countdown timer for added challenge</li>
            <li>Collision detection system</li>
            <li>Scoring and win/lose conditions</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
        <div className="development-info">
          <h2>Development Journey</h2>
          <p>
            This game is being built as part of our capstone project, focusing on modern web 
            development technologies including React, JavaScript, and responsive CSS design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;