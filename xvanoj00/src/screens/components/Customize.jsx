//autor: Jakub Vano (xvanoj00)

import React from "react";
import "./Customize.css";

const Customize = (props) => {
  //autor: Zuzana Hrklova (xhrklo00)
  //----------------------------------------------------------------------------------------
  return (
    <div>
      <div className="rows">
        <p>
          <b>Ship color</b>
        </p>
        <button
          className="colorButton"
          style={{ backgroundColor: "white" }}
          onClick={() => props.handleShipColorWhite(props.shipColor)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "gray" }}
          onClick={() => props.handleShipColorGray(props.shipColor)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "black" }}
          onClick={() => props.handleShipColorBlack(props.shipColor)}
        >
          X
        </button>
      </div>
      <div className="rows">
        <p>
          <b>Board color</b>
        </p>
        <button
          className="colorButton"
          style={{ backgroundColor: "#fcba03" }}
          onClick={() => props.handleGridColorYellow(props.color)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#d95050" }}
          onClick={() => props.handleGridColorRed(props.color)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#d050d9" }}
          onClick={() => props.handleGridColorPurple(props.color)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#83ed7e" }}
          onClick={() => props.handleGridColorGreen(props.color)}
        >
          X
        </button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#dae8fc" }}
          onClick={() => props.handleGridColorDef(props.color)}
        >
          X
        </button>
      </div>
    </div>
    //----------------------------------------------------------------------------------------
  );
};
export default Customize;
