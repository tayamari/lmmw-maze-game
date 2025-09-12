import React from "react";
import Timer from './Timer.jsx'
import GameBoard from './GameBoard.jsx'


function Home() {
    return(
        <div>
            <Timer duration={10}/>
        
            <GameBoard/>
        </div>
    )
}

export default Home;