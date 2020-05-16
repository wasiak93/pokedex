import React from "react";
import "./Button.css";

const Button = ({ text, nameClass, onClick, name, actualType }) => {
  return (
    <button
      className={
        nameClass
          ? actualType === name
            ? `catalog__button ${nameClass} catalog__button--active`
            : `catalog__button ${nameClass}`
          : "catalog__button"
      }
      onClick={name ? () => onClick(name) : onClick}
    >
      {text}
    </button>
  );
};

export default Button;
