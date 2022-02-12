import React, {useState} from "react";
import Circle from "./Circle";
import ColorButton from "./ColorButton";

const ColorCircle = () => {
    const [circles, setCircles] = useState(['cornflowerblue', 'peachpuff', 'lavender']) 
    const addCircle = (color) => {
        // setCircles(circles => {
        //     const newCircles = circles.slice();
        //     newCircles.push("magenta")
        //     return newCircles;
        // })
        setCircles(circles => {
            return [...circles, color]
        })
    }

    return (
        <div>
            <ColorButton addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']} />
            {/* <ColorButton addCircle={addCircle} options={['orange','teal','magenta']} /> */}
            {circles.map((color, idx) => (
                <Circle color={color} idx={idx} />
            ))}
        </div>
    )
}
export default ColorCircle;