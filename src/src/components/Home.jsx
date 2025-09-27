import React from "react";
import { Link } from "react-router";
import "./Home.css";
import HeroImage from "../assets/title-cards/game-title-dark.png";

function Home() {
    return(
        <div className="home-container">
            {/* "Title screen" */}
            <img src={HeroImage} alt="Little Miss Medicine Woman title screen" />
            <h1 className="home-subheader">Can you fix an elixir to heal a neighbor?</h1>
            
            <Link to="/menu">
            <button className="play-btn">Play!</button>
            </Link>
        </div>
    )
}

export default Home;