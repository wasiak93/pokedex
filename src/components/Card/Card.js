import React from "react";
import "./Card.css";

const Card = ({ id, name, imageUrl, supertype, subtype, rarity, number }) => {
  return (
    <div key={id} className="card">
      <p className="card__title">
        <span className="card__name">{name}</span>
        Nr: {number}
      </p>
      <img src={imageUrl} alt="pokemon" className="card__img" />
      <p className="card__type-name">
        <span className="card__type">Superttype: </span>
        {supertype}
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
