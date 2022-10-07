import {React} from "react";

const ButtonLarge = (props)=>{
        return(
            <button
            style={props.style}
            className="button-start"
            type="button"
            onClick={props.clicked}>
            {props.text}
            </button>
        )
};

export default ButtonLarge;