import React from "react";
import "./HeaderForm.css";

const HeaderForm = ({ inputValue, handlerInput }) => {
  return (
    <form className="form">
      <input
        type="text"
        value={inputValue}
        className="form__input"
        onChange={handlerInput}
        placeholder="Search"
      />
      <div className={`form__line ${inputValue && "form__line--brown"}`}></div>
      <div>{inputValue && "Search"}</div>
    </form>
  );
};

export default HeaderForm;
