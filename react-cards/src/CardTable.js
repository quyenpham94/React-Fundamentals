import React from 'react';
import PlayingCardList from './PlayingCardList';
import './CardTable.css';

const CardTable = () => {
    return (
        <div className='CardTable'>
            <header>
                <h1 className='CardTable-heading'>Check out all my cards</h1>
            </header>
            <main>
                <PlayingCardList />
            </main>
        </div>
    )
}
export default CardTable;