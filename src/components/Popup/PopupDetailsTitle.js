import React from "react";
import "./PopupDetailsTitle.css";

const PopupDetailsTitle = ({ name, value }) => {
  return (
    <p className="popup__detail-name" key={name}>
      {name}
      <span className="popup__name">{value}</span>
    </p>
  );
};

export default PopupDetailsTitle;
