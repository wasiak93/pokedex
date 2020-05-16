import React from "react";
import "./Header.css";

const Header = ({ inputValue, handlerInput }) => {
  return (
    <div className="catalog__header header">
      <h1 className="header__title">
        Pokemon <span className="header__title--brown">catalog</span>
      </h1>
      <form className="header__form">
        <input
          type="text"
          value={inputValue}
          className="header__input"
          onChange={handlerInput}
          placeholder="Search"
        />
        <div
          className={
            inputValue ? "header__line header__line--color" : "header__line"
          }
        ></div>
        <div className="header__input-subtitle">{inputValue && "Search"}</div>
      </form>
    </div>
  );
};

export default Header;
