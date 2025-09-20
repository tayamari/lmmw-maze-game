import React from "react";
import { Link } from "react-router";
import "./Home.css";
import HeroImage from "../assets/title_cards/game-title-dark.png";

function Home() {
    return(
        <div className="home-container">
            {/* "Title screen" */}
            <img src={HeroImage} alt="Little Miss Medicine Woman title screen" />
            <Link to="/menu">Play!</Link>
        </div>
    )
}

export default Home;