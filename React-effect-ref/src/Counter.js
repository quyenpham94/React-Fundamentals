import React, {useState, useEffect} from "react";

function Counter() {
    const [num, setNum] = useState(0);
    
    const increment = () => {
        setNum(n => n + 1);
    };

    useEffect(() => {
        console.log("RUNNING CALLBACK") // this run after every single render
        document.title = `Hi ${"!".repeat(num)}`
    })

    return (
        <div>
            {console.log("RENDERING!!!")}
            Let's get excited.
            <button onClick={increment}>Get more excited.</button>
            <p>Counter: {num}</p>
        </div>
    )
}

export default Counter;