import React, {useState} from "react";

const Card = ({name, image}) => {
    const [{angle, xPosition, yPosition}] = useState({
        angle: Math.random() * 90 - 45,
        xPosition: Math.random() * 40 - 20,
        yPosition: Math.random() * 40 - 20
    });

    const transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`;

    return <img className="Card"
                alt={name}
                src={image}
                style={{transform}} />

}   

export default Card;