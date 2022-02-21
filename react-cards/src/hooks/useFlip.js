import React, {useState} from "react";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

export default useFlip;