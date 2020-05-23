import React from "react";
import "./PopupDetailTitle.css";

const PopupDetailTitle = ({ name, value }) => {
  return (
    <p className="popup__detail-name" key={name}>
      {name}
      <span>{value}</span>
    </p>
  );
};

export default PopupDetailTitle;
