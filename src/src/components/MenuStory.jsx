import React from "react";
import { Link } from "react-router";
import "./Home.css";
import { randomIngredients, randomCritter } from './AssetRendering.jsx';
import "./MenuStory.css";

function MenuStory() {
    return(
        <div className="home-container">
            <div className="story">
                <h2>Oh my! It's nice to meet you, Neighbor Dupree. </h2>
                <h2>You know I used to know your Granny Emma, back in the day.</h2>
                <h2>Oh, she used to get us right with those earthly remedies.</h2>
                <h2>Well darlin', I know she had to have taught you well. Me? I'm not feeling well. Could you help me?
                </h2>
                <h1>Instructions</h1>
                <p>You have all but THREE ingredients you need to make Granny B's elixir to improve her health. Can you find them in the maze?</p>
                <p>If you collect or collide into anything outside of what you need, game's up! And...be weary of the moosebear! Can you do it?</p>
                </div> 
            {/* "Display story info + items for elixir w/ play button" */}
            <h2>INGREDIENTS</h2>
            <img src={randomIngredients[0]}/>
            <img src={randomIngredients[1]}/>
            <img src={randomIngredients[2]}/>
            <Link to="/game">
            <button className="menuStory-btn">Enter the hedge maze!</button>
            </Link>
        </div>
    )
}

export default MenuStory; 