import React from "react";

const CardTypeAcapit = ({ bigger, name, type }) => {
  return (
    <p className="card__acapit">
      <span className={`card__type ${bigger ? "card__type--bigger" : ""}`}>
        {name}
      </span>
      {type}
    </p>
  );
};

export default CardTypeAcapit;
