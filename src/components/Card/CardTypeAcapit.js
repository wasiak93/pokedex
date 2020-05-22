import React from "react";

const CardTypeAcapit = ({ name, type }) => {
  return (
    <p className="card__type-name">
      <span className="card__type">{name} </span>
      {type}
    </p>
  );
};

export default CardTypeAcapit;
