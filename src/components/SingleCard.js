import React from "react";
import "./SingleCard.css";

export const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipper" : ""}>
        <img className="front" src={card.src} alt="" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt=""
        />
      </div>
    </div>
  );
};