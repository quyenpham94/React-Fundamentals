import React, {useEffect, useState, useRef} from 'react';
import Card from "./Card";
import axios from "axios";

const API_BASE_URL = "http://deckofcardsapi.com/api/deck";


// Deck: uses deck API, allows drawing card at a time.

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);
    const timeRef = useRef(null);

    // fetch data
    useEffect(() => {
        async function getData() {
            let d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            setDeck(d.data);
        }
        getData();
    }, [setDeck]);

    // draw one card every second if autoDraw is true
    useEffect(() => {
        // Draw a card via API, add card to state "draw" list
        async function getCard() {
            let {deck_id} = deck;

            try {
                let drawRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);

                if (drawRes.data.remaining === 0) {
                    setAutoDraw(false);
                    throw new Error("no cards remaining!");
                }

                const card = drawRes.data.cards[0];

                setDrawn(d => [
                    ...d,
                    {
                        id: card.code, 
                        name: card.suit + " " + card.value,
                        image: card.image
                    }
                ]);
            } catch(err) {
                alert(err)
            }
        }

        if (autoDraw && !timeRef.current) {
            timeRef.current = setInterval(async () => {
                await getCard();
            }, 1000);
        }
        return () => {
            clearInterval(timeRef.current);
            timeRef.current = null;
        };

    }, [autoDraw, setAutoDraw, deck]);

    const toggleAutoDraw = () => {
        setAutoDraw(auto => !auto);
    };


    const cards = drawn.map(c => (
        <Card key={c.id} name={c.name} image={c.image} />
    ));

    return (
        <div className="Deck">
            {deck ? (
                <button className="Deck-gimme" onClick={toggleAutoDraw}>
                    {autoDraw ? "STOP" : "KEEP"} DRAWING FOR ME!
                </button>
            ) : null}
            <div>{cards}</div>
        </div>
    )
}

export default Deck;