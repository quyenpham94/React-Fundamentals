import React from "react";

const NumberItems = ({number, remove}) => {
    const handleRemove = () => {
        remove(number);
    }
    return (
    <li>
        <button onClick={handleRemove}>{number}</button>
    </li>
    )
    
}

export default NumberItems; 