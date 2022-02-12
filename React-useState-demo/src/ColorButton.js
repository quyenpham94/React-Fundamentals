import React from "react";  
import "./ColorButton.css"

const ColorButton = ({options, addCircle}) => {
    return (
        <div className="ColorButton">
           {options.map(color => ( 
           <button 
                onClick={() => addCircle(color)} 
                className="ColorButton-btn"
                style={{backgroundColor: color}}
                >
               {color}
            </button>
            ))}
        </div>
    )
}
export default ColorButton;