import React from "react";
import "./Popup.css";
import Card from "../Card/Card";
import { useEffect } from "react";
import PopupDetail from "./PopupDetail";
import PopupDetailsTitle from "./PopupDetailsTitle";
import PopupButton from "./PopupButton";

const Popup = ({ card, onClick, onKeyDown }) => {
  const cardObject = card[0];
  const cardName = card[0].name;

  const attacks =
    cardObject.attacks &&
    cardObject.attacks.map(({ name, damage }) => (
      <PopupDetailsTitle key={name} name={name} value={damage} />
    ));
  const weaknesses =
    cardObject.weaknesses &&
    cardObject.weaknesses.map(({ type, value }) => (
      <PopupDetailsTitle key={type} name={type} value={value} />
    ));

  const detailsArray = [
    { id: 0, title: "attacks", array: attacks },
    { id: 1, title: "weaknesses", array: weaknesses },
  ];

  const details = detailsArray.map(({ title, array, id }) => (
    <PopupDetail title={title} array={array} key={id} />
  ));
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="popup">
      <div className="popup__wrapper">
        <PopupButton onClick={onClick} />
        <h2 className="popup__title">{cardName} fight details</h2>
        <Card cardInPopup="true" {...cardObject} />
        <div className="popup__fight-details">{details}</div>
      </div>
    </div>
  );
};

export default Popup;
