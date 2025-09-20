import React from "react";
import { Link } from "react-router";
import "./Home.css";
import { randomIngredients, randomCritter } from './AssetRendering.jsx';

function MenuStory() {
    return(
        <div className="home-container">
            {/* "Display story info + items for elixir w/ play button" */}
            <h2>INGREDIENTS</h2>
            <img src={randomIngredients[0]}/>
            <img src={randomIngredients[1]}/>
            <img src={randomIngredients[2]}/>
            <Link to="/game">Enter the hedge maze!</Link>
        </div>
    )
}

export default MenuStory; 