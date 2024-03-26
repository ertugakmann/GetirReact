import React from "react";
import { useEffect, useState } from "react";
import cardsData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid gap-x-5 mt-10 grid-cols-3">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={card.image} />
            <h3 className="text-lg font-semibold text-brand-color mt-4">
              {card.title}
            </h3>
            <p className="text-sm mt-2 ">{card.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
