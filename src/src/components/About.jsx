import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Game</h1>
        <p>
          Welcome to our Maze Adventure Game! 🎮 This interactive project is part of our Spring 2025 Capstone, where we’re bringing together creativity, strategy, and modern web technologies to deliver an exciting gaming experience built with React.
        </p>
        <div className="game-features">
          <h2>Game Features</h2>
          <ul>
            <li>🧩 Interactive Maze Navigation – Guide your player through a dynamic maze.</li>
            <li>⏱️ Countdown Timer – Race against time for an extra layer of challenge.</li>
            <li>🚧 Collision Detection – Stay sharp! Running into walls or obstacles impacts your progress.</li>
            <li>⭐ Scoring & Win/Lose Conditions – Track your performance and aim for the highest score.</li>
            <li>📱 Responsive Design – Play seamlessly across desktop, tablet, and mobile devices.</li>
          </ul>
        </div>
        <div className="development-info">
          <h2>Development Journey</h2>
          <p>
            This game is being developed as part of our capstone project and highlights the use of modern web development technologies:
          </p>
          <ul>
            <li>⚛️ React – For building a dynamic and responsive user interface.</li>
            <li>🎨 CSS3 – To create visually appealing styles and layouts.</li>
            <li>🛠️ JavaScript – The backbone of our game logic and interactivity.</li>
          </ul>
          <p>
            We’re excited to share our progress and look forward to your feedback as we continue to enhance the game!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;