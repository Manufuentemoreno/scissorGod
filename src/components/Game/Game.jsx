import {React, useState, useEffect} from "react";
import "./Game.css";
import logo from '../../Images/godLanding.png';

import ButtonLarge from "../ButtonLarge/ButtonLarge";
import Playing from "../Playing/Playing";
import Results from "../Results/Results";

const stagesOfGame = {
    a: "landing",
    b: "playing",
    c: "results"
}

const titleStates = {
    a: "",
    b: "title-top"
}

const backImageStates = {
    a: "",
    b: "App-logo-back"
}

const options = [
    {
        title: "Piedra",
        value: 0
    },
    {
        title: "Papel",
        value: 1
    },
    {
        title: "Tijera",
        value: 2
    }
];

const Game = function(){
    
    const [ stageOfGame, setStageOfGame ] = useState(stagesOfGame.a)
    const [ stateTitle, setStateTitle ] = useState(titleStates.a);
    const [ stateImage, setStateImage ] = useState(backImageStates.a);

    const [ userChoice, setUserChoice ] = useState();
    const [ godChoice, setGodChoice ] = useState();
    const [ gameResult, setGameResult ] = useState();
    const [ score, setScore ] = useState(0);


    // CSS Animations
    useEffect(()=>{
        if (stageOfGame == stagesOfGame.a){
            setStateTitle(titleStates.a);
            setStateImage(backImageStates.a);
        }
        else if(stageOfGame == stagesOfGame.b){
            setStateTitle(titleStates.b);
            setStateImage(backImageStates.b);
        }
    },[stageOfGame, stateTitle, stateImage]);

    // Start Game
    function play(e){        
        setStageOfGame(stagesOfGame.b)
    };

    // Exit Game
    function reset(){
        setStageOfGame(stagesOfGame.a);
        setScore(0);
    }

    // Defining Result
    const result = (event)=>{
        const optionSelected = event.target.value;
        const machineOption = options[Math.floor(Math.random()*options.length)]

        setGodChoice(machineOption.title);
        setUserChoice(options[optionSelected].title)

        if(optionSelected == machineOption.value){
            setGameResult("Empate");
            setScore(score => score +1);
        }
        else if( 
            optionSelected == machineOption.value+1 ||
            (optionSelected == 0 && machineOption.value == 2)
            ){
                setGameResult("Ganaste");
                setScore(score => score +3);
            }
        else{
            setGameResult("Perdiste");
        }

        setStageOfGame(stagesOfGame.c)
    };
   
    return(
        <div className="App-main">
            <h1 className={`title ${stateTitle}`} onClick={reset}>Scissor God</h1>
            <img src={ logo } 
            className={`App-logo ${stateImage}`}
            alt="God"/>

            {stageOfGame == "landing" && 
                <ButtonLarge 
                    text={"Jugar!"}
                    clicked={play}
                />
            }

            {stageOfGame == "playing" &&
                <Playing action={result} />
            }

            {stageOfGame == "results" && 
                <Results
                    action={play}
                    result={gameResult}
                    points={score}
                    god={godChoice}
                    user={userChoice}
                />}
        </div>
    )
};

export default Game;