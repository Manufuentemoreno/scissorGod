import React from "react";
import {Link} from "react-router-dom"
import "./HighScore.css"

const HighScore = ()=>{
    return(
        <div className="game-section">
            <h1>Game</h1>
            <article className="options">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
            </article>
            <article className="options">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
            </article>
            <Link to="/" exact="true">
                Home
            </Link>
        </div>
    )
}

export default HighScore;