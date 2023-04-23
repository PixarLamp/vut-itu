//autor: Jakub Vano (xvanoj00)

import React from "react";
import "./Popup.css";
import Button from "@mui/material/Button";

function PopTutorial(props) {
  return props.trigger ? (
    //rendering popup window with close button
    <div className="popup">
      <div className="popup-inner">
        <Button
          className="close-btn"
          onClick={() => props.setTrigger(false)}
          variant="outlined"
        >
          X
        </Button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopTutorial;
