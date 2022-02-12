import React, {useState} from "react";
import NumberItems from './NumberItems';
 
const NumberList = (props) => {
    const [numbers, setNumbers] = useState([1,2,2,5,7,11,12,28]);
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num))
        console.log("REMOVING", num)
    }
    return (
        <ul>
            {numbers.map((n,i) => (
             <NumberItems number={n} remove={remove} key={i}/>
            ))}
        </ul>
    );
};


export default NumberList;