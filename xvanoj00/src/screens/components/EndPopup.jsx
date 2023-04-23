//autor: Jakub Vano(xvanoj00)

import React from "react";
import "./Popup.css";

function PopTutorial(props) {
  //rendering popup window for the end of game
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default PopTutorial;
