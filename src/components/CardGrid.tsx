import { useState } from 'react';
import Card from './Card';
import './CardGrid.css';

type Card = { cardId: number; animalId: number };

const initialState = [
  { cardId: 1, animalId: 1, open: false },
  { cardId: 2, animalId: 5, open: false },
  { cardId: 3, animalId: 4, open: false },
  { cardId: 4, animalId: 2, open: false },
  { cardId: 5, animalId: 1, open: false },
  { cardId: 6, animalId: 5, open: false },
  { cardId: 7, animalId: 3, open: false },
  { cardId: 8, animalId: 2, open: false },
  { cardId: 9, animalId: 3, open: false },
  { cardId: 10, animalId: 4, open: false },
  { cardId: 11, animalId: 2, open: false },
  { cardId: 12, animalId: 3, open: false },
  { cardId: 13, animalId: 4, open: false },
  { cardId: 14, animalId: 3, open: false },
  { cardId: 15, animalId: 2, open: false },
  { cardId: 16, animalId: 4, open: false },
];

function CardGrid() {
  const [gridState, setGridState] = useState(initialState);

  const [currentOpenCard, setCurrentOpenCard] = useState({
    animalId: 0,
    cardId: 0,
  });

  const newGameHandler = () => setGridState(initialState);

  const clickHandler = (animalId: number, cardId: number) => {
    setGridState(
      gridState.map((cardState) =>
        cardState.cardId === cardId ? { ...cardState, open: true } : cardState
      )
    );
    if (currentOpenCard.cardId === 0) {
      setCurrentOpenCard({ animalId, cardId });
      return;
    }

    if (currentOpenCard.animalId === animalId) {
      setCurrentOpenCard({ animalId: 0, cardId: 0 });
      return;
    } else {
      setTimeout(() => {
        setGridState(
          gridState.map((cardState) =>
            cardState.cardId === cardId ||
            cardState.cardId === currentOpenCard.cardId
              ? { ...cardState, open: false }
              : cardState
          )
        );
        setCurrentOpenCard({ animalId: 0, cardId: 0 });
      }, 1000);
    }
  };

  return (
    <div className="container">
      <p className="title">Memory Game</p>
      <div className="card-grid">
        {gridState.map((card) => (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            animalId={card.animalId}
            open={card.open}
            cardClickedHandler={clickHandler}
          ></Card>
        ))}
      </div>
      {gridState.every((cardState) => cardState.open === true) && (
        <div className="end-game">
          <p className="end-game-message">Congrats!</p>
          <button onClick={newGameHandler}>new game</button>
        </div>
      )}
    </div>
  );
}

export default CardGrid;
