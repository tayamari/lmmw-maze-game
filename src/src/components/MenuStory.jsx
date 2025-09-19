import React from "react";
import { Link } from "react-router";
import "./Home.css";

function MenuStory() {
    return(
        <div className="home-container">
            {/* "Display story info + items for elixir w/ play button" */}
            <Link to="/game">Enter the hedge maze!</Link>
        </div>
    )
}

export default MenuStory; 