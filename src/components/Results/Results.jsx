import React from "react";
import ButtonLarge from "../ButtonLarge/ButtonLarge";

const Results = (props)=>{
    return(
        <div className="results">
            <section className="data-results">
                <h2>¡{props.result}!</h2>
                <h3>{props.points} Puntos</h3>
                <p>El Dios Eligió: {props.god}</p>
                <p>Tu elección: {props.user}</p>
            </section>
            <ButtonLarge 
                style={{width: 221}}
                text={"Jugar Otro"}
                clicked={props.action}
            />
        </div>
    )
};

export default Results;