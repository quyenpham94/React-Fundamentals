import React, {useState} from "react";

const SimpleCounter = () => {
    const [num, setNum] = useState(0);
    
    console.log("running again!!! num is:", num);

    const clickUp = () => {
        setNum(n => n + 1);
    }

    const clickUpBy2 = () => {
        setNum(n => n + 1);
        setNum(n => n + 1); //using arrow here, the second one will run untill first one finished
                                    // the first will pass new value to second one.
    }

    return (
        <div>
            <h3>Count: {num} </h3>
            <button onClick={clickUp}>Up</button>
            <button onClick={clickUpBy2}>Up By 2</button>

            
        </div>
    )
}

export default SimpleCounter;