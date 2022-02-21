import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";

const Counter = () => {
    const [count, setCount] = useLocalStorage('count', 0);
    const addToCount = () => {
        setCount(count => count + 1)
    }
    return (
        <>
            <h4>{count}</h4>
            <button onClick={addToCount}>Add</button>
        </>
    )
}

export default Counter;