import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";

const ColorPicker = () => {
    const [color, setColor] = useLocalStorage('color', 'teal');
    const changeColor = e => {
        setColor(e.target.value)
    }
    return (
        <>
            <h1 style={{color}}>Your Color Is {color}</h1>
            <select value={color} onChange={changeColor}>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>


            </select>
        </>
    )
}

export default ColorPicker;