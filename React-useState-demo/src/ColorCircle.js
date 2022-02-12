import React, {useState} from "react";
import Circle from "./Circle";
import ColorButton from "./ColorButton";

function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
}

const ColorCircle = () => {
    const [circles, setCircles] = useState([]) 
    const addCircle = (color) => {
        // setCircles(circles => {
        //     const newCircles = circles.slice();
        //     newCircles.push("magenta")
        //     return newCircles;
        // })
        setCircles(circles => {
            return [...circles, {color, x: getRandom(), y: getRandom()}]
        })
    }

    const changePosition = idx => {
        setCircles(circles => {
            const copy = [...circles];
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        }) 
    }

    return (
        <div>
            <ColorButton addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']} />
            {/* <ColorButton addCircle={addCircle} options={['orange','teal','magenta']} /> */}
            {circles.map(({color, x, y}, idx) => (
                <Circle changePosition={changePosition}
                        color={color} 
                        idx={idx}  
                        key={idx} 
                        x={x} 
                        y={y} />
            ))}
        </div>
    )
}
export default ColorCircle;