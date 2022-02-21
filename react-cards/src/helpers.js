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

const formatPokemon = (data) => {
    return {
        id: uuid(),
        front: data.sprites.front_default,
        back:data.sprites.back_default,
        name: data.name,
        stats: data.stats.map(stat => ({
            value: stat.base_stat,
            name: stat.stat.name
        }))
    };
}


export { choice, formatCard, formatPokemon }
