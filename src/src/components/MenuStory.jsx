import React from "react";
import { Link } from "react-router";
import "./Home.css";
import { randomIngredients, randomCritter } from './AssetRendering.jsx';
import "./MenuStory.css";
import grannyBSmile from "../assets/sprites/granny_b/GrannyBSmile.png";

function MenuStory() {
    return(
        <div className="home-container">
            <h1 className="menuStory-header">Story</h1>
            <img src={grannyBSmile} className="granny"/>
            <div className="story-container">
                <div className="story">
                <h2>Oh my! It's nice to meet you, Neighbor Dupree. </h2>
               <h2>You know, I used to know your Granny Emma, back in the day.</h2>
                <h2>She used to get us right with an earthly remedy.</h2>
                <h2>Well darlin', I know she had to have taught you well. I'm not feeling well.</h2>
                <h2 className="help">Could you help me?</h2>
                <div className="instructions">
                    <br/>
                      <br/>
                <h1 className="menuStory-header">Instructions</h1>
                <h2>You have all but THREE ingredients you need to make Granny B's elixir and improve her health. In 45 SECONDS, use the maze to find them.</h2>
                <h2>Ah, yes...And be weary of the moosebears— They might want your ingredients too!</h2>
                <h2 className="help">Can you do it?</h2>
                </div>
                </div>
            </div> 
            {/* "Display story info + items for elixir w/ play button" */}
            <h2 className="ingredients-header">INGREDIENTS</h2>
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