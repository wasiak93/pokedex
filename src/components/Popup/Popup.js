import React from "react";
import "./Popup.css";
import Card from "../Card/Card";

const Popup = ({ card, onClick }) => {
  const cardObject = card[0];
  const attacks =
    cardObject.attacks &&
    cardObject.attacks.map(({ name, damage }) => (
      <p className="card__title popup__title" key={name}>
        <span className="card__name">{name}</span>
        {damage}
      </p>
    ));
  const weaknesses =
    cardObject.weaknesses &&
    cardObject.weaknesses.map(({ type, value }) => (
      <p className="card__title popup__title" key={type}>
        <span className="card__name">{type}</span>
        {value}
      </p>
    ));
  return (
    <div className="popup">
      <button className="popup__button" onClick={onClick}>
        X
      </button>
      <Card {...cardObject} />
      <div className="popup__details--wrapper">
        <div className="popup__details">
          <p className="popup__title--bigger">Attacks</p>
          {attacks}
        </div>
        <div className="popup__details">
          <p className="popup__title--bigger"> Weaknesses</p>
          {weaknesses}
        </div>
      </div>
    </div>
  );
};

export default Popup;
