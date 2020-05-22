import React from "react";
import "./Button.css";

const Button = ({ text, nameClass, onClick, name, actualType }) => {
  return (
    <button
      className={`button ${nameClass} ${
        actualType === name ? "button--active" : ""
      }`}
      onClick={name ? () => onClick(name) : onClick}
    >
      {text}
    </button>
  );
};

export default Button;
