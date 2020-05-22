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
    { id: 1, name: "Subtype", type: subtype },
    { id: 2, name: "Rarity", type: rarity },
  ];

  const numberWithSign = `Nr: ${number}`;

  const typeAcapits = typesArray.map((type) => (
    <CardTypeAcapit key={type.id} {...type} />
  ));

  return (
    <div
      className={`card ${cardInPopup ? "card--in-popup" : ""}`}
      onClick={onClick ? () => onClick(id) : null}
    >
      <CardTypeAcapit bigger="1" name={name} type={numberWithSign} />
      <img src={imageUrl} alt="pokemon" className="card__img" />
      {typeAcapits}
    </div>
  );
};

export default Card;
