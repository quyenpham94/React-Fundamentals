import React from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./back.png";
import './PlayingCard.css';

// renders a single playing card.
const PlayingCard = ({ front, back = backOfCard }) => {
    const [isFacingUp, flip] = useFlip();
    return (
        <img    
            src={isFacingUp ? front : back}
            alt="playing card"
            onClick={flip}
            className="PlayingCard Card"
        />
    );
}

export default PlayingCard;