import React from "react";
import "./Card.css";

const Card = ({
  id,
  name,
  imageUrl,
  subtype,
  rarity,
  number,
  onClick,
  types,
  cardInPopup,
}) => {
  return (
    <div
      className={`card ${cardInPopup && "card--in-popup"}`}
      onClick={onClick ? () => onClick(id) : null}
    >
      <p className="card__title">
        <span className="card__name">{name}</span>
        Nr: {number}
      </p>
      <img src={imageUrl} alt="pokemon" className="card__img" />
      <p className="card__type-name">
        <span className="card__type">Type: </span>
        {types[0]}
      </p>
      <p className="card__type-name">
        <span className="card__type">Subtype: </span> {subtype}
      </p>
      <p className="card__type-name">
        <span className="card__type">Rarity: </span> {rarity}
      </p>
    </div>
  );
};

export default Card;
