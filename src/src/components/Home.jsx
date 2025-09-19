import React from "react";
import { Link } from "react-router";
import "./Home.css";

function Home() {
    return(
        <div className="home-container">
            {/* "Title screen" */}
            <img src="https://placehold.co/600x400" alt="Title Screen Placeholder" />
            <Link to="/menu">Play!</Link>
        </div>
    )
}

export default Home;