import React from "react";
import "./PopupDetailTitle.css";

const PopupDetailTitle = ({ name, value }) => {
  return (
    <p className="popup__detail-name" key={name}>
      {name}
      <span className="popup__name">{value}</span>
    </p>
  );
};

export default PopupDetailTitle;
