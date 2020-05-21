import React from "react";
import "./PopupButton.css";
import CloseSVG from "../../assets/svg/close.png";

const PopupButton = ({ onClick }) => {
  return (
    <button className="popup__button" onClick={onClick}>
      <img src={CloseSVG} alt="close" />
    </button>
  );
};

export default PopupButton;
