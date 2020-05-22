import React from "react";
import "./Card.css";
import CardTypeAcapit from "./CardTypeAcapit";

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
  const typesArray = [
    { id: 0, name: "Type", type: types[0] },
    { id: 0, name: "Subtype", type: subtype },
    { id: 0, name: "Rarity", type: rarity },
  ];

  const typeAcapits = typesArray.map((type) => <CardTypeAcapit {...type} />);
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
      {typeAcapits}
    </div>
  );
};

export default Card;
