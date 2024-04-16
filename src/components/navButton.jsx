import React from "react";
import "./navButton.css";
const navButton = (props) => {
  return (
    <div className="navButton">
      <p>{props.name}</p>
    </div>
  );
};

export default navButton;
