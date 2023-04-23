//autor: Jakub Vano (xvanoj00)

import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Tiny from "./1square.png";
import Small from "./2square.png";
import Medium from "./3square.png";
import Big from "./4square.png";

const Settings = (props) => {
  return (
    //rendering components in popup
    <div className="set">
      Board Size
      <div className="setin">
        <Button
          sx={{ color: "white", margin: 2, backgroundColor: "black" }}
          variant="outlined"
          onClick={() => props.onDecrement()}
        >
          -
        </Button>
        {props.board} x {props.board}
        <Button
          sx={{ color: "white", margin: 2, backgroundColor: "black" }}
          variant="outlined"
          onClick={() => props.onIncrement()}
        >
          +
        </Button>
      </div>
      <img src={Tiny} alt="Tiny" color="red" />
      <div className="setin">
        1 square ship: {props.tiny}
        <Slider
          aria-label="Tiny ship"
          defaultValue={props.tiny}
          onChange={(event, value) => props.onTiny(event, value)}
          step={1}
          marks
          min={1}
          max={10}
        />
      </div>
      <img src={Small} alt="Small" />
      <div className="setin">
        2 square ship: {props.small}
        <Slider
          aria-label="Small ship"
          defaultValue={props.small}
          onChange={(event, value) => props.onSmall(event, value)}
          step={1}
          marks
          min={1}
          max={5}
        />
      </div>
      <img src={Medium} alt="Medium" />
      <div className="setin">
        3 square ship: {props.medium}
        <Slider
          aria-label="Medium Ship"
          defaultValue={props.medium}
          onChange={(event, value) => props.onMedium(event, value)}
          step={1}
          marks
          min={1}
          max={4}
        />
      </div>
      <img src={Big} alt="Big" />
      <div className="setin">
        4 square ship: {props.big}
        <Slider
          aria-label="Big Ship"
          defaultValue={props.big}
          onChange={(event, value) => props.onBig(event, value)}
          step={1}
          marks
          min={1}
          max={3}
        />
      </div>
    </div>
  );
};

export default Settings;
