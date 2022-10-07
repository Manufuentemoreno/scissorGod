import React from "react";
import logo from "../../Images/godLanding.png";
import "./Footer.css"

export default ()=>{
    return(
        <footer>
            <div className="credits">
                <p>Proyect: Manu</p>
                <p>Ilustrated by <a href="https://www.instagram.com/algundia_dibujos/" target={"_blank"}>@algundía_dubjos</a></p>
            </div>                
            <img src={logo} alt="The Scissor God" className="img-footer"/>
        </footer>
    )
}