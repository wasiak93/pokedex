import React from "react";
import "./Button.css";

const Button = ({ text, nameClass, onClick }) => {
  return (
    <button
      className={nameClass ? `catalog__button ${nameClass}` : "catalog__button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
