import { type SyntheticEvent } from 'react';
import './Card.css';

type CardClickedHandler = (animalId: number, cardId: number) => void;

type PropsType = {
  cardId: number;
  animalId: number;
  cardClickedHandler: CardClickedHandler;
  open: boolean;
};

function Card({ cardId, animalId, cardClickedHandler, open }: PropsType) {
  const clickHandler = (e: SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    cardClickedHandler(animalId, cardId);
  };

  return (
    <div className="card" onClick={clickHandler}>
      <img
        className={`image ${open ? 'open' : 'closed'}`}
        src={`src/assets/${animalId}.png`}
      ></img>
    </div>
  );
}

export default Card;
