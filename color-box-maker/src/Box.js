import React from "react";

const Box = ({backgroundColor, width, height}) => {
    
    return (
        <div>
            <ul>{backgroundColor}</ul>
            <ul>{width}</ul>
            <ul>{height}</ul>
        </div>
    )
}

export default Box;