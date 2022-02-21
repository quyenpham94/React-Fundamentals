import { v4 as uuid } from "uuid";

const choice = (values) => {
    const randIdx = Math.floor(Math.random() * values.length);
    return values[randIdx];
}

const formatCard = (data) => {
    return {
        image: data.cards[0].image,
        id: uuid()
    };
}


export {choice, formatCard}
