import React from "react";
import "./Header.css";
import HeaderForm from "./HeaderForm";

const Header = ({ inputValue, handlerInput }) => {
  return (
    <div className="catalog__header header">
      <h1 className="header__title">
        Pokemon <span className="header__title--brown">catalog</span>
      </h1>
      <HeaderForm inputValue={inputValue} handlerInput={handlerInput} />
    </div>
  );
};

export default Header;
