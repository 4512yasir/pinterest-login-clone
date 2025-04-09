import React from "react";

function Button(props){
    return(
    <div className="button">
        <button id={props.id}>{props.text}</button>

    </div>
    )
}
export default Button;