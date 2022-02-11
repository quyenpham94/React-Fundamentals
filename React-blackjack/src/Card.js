import React from "react";  
import "./Card.css";

const Card = (props) => {
    return (
        <img 
            className="Card"
            src={`https://deckofcardsapi.com/static/img/${props.cardId}.png`}
            alt={`${props.cardId} playing card`}
        />
    )
}

export default Card;
