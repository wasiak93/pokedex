import React from "react";
import "./Popup.css";
import Card from "../Card/Card";

const Popup = ({ card }) => {
  console.log(card);
  return (
    <div className="catalog__popup">
      <Card {...card} />
    </div>
  );
};

export default Popup;
