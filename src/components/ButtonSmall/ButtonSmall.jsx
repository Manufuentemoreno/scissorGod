import React from "react";

const ButtonSmall = (props)=>{
    return(
        <button 
            key={props.id} 
            className="option-game"
            type="button"
            onClick={props.action}
            value={props.id}
        >{props.title}
        </button>
    )
};

export default ButtonSmall;