import React from "react";
import "./PopupDetails.css";

const PopupDetail = ({ title, array }) => {
  return (
    <div className="popup__detail">
      <p className="popup__detail-type">{title}</p>
      {array}
    </div>
  );
};

export default PopupDetail;
