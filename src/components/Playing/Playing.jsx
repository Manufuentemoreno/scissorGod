import {React, useState} from "react";

import ButtonSmall from "../ButtonSmall/ButtonSmall";

const Playing = (props)=>{   
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

    return(
        <section className="section-play">
        <img className="draw" alt="photo"/>            
        <article className="options-game">
            {options.map( op =>{
                return <ButtonSmall key={op.title}
                    id={op.value}     
                    action={props.action}
                    title={op.title}
                />}
            )}
        </article>
        </section>
    )
};

export default Playing;