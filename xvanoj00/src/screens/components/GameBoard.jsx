//autor: Jakub Vano (xvanoj00)

import React, { useEffect, useRef, useState } from "react";
import "./gameBoard.css";
import Ship1 from "./1square.png";
import Ship2 from "./2square.png";
import Ship3 from "./3square.png";
import Ship4 from "./4square.png";

function GameBoard(props) {
  //setting values for the board
  const size = props.size;
  let ship1 = props.tiny;
  let ship2 = props.small;
  let ship3 = props.medium;
  let ship4 = props.big;
  let board = [];

  //autor Zuzana Hrklova xhrklo00
  //----------------------------------------------------------------------------------------
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (ship4 !== 0) {
        if (j === 0) {
          board.push(
            <div className="Tile" style={{ backgroundColor: props.gridColor }}>
              <img
                src={Ship4}
                className="Ship4"
                alt="ship4"
                style={{ filter: props.shipColor }}
              />
            </div>
          );
          ship4 = ship4 - 1;
        } else {
          board.push(
            <div
              className="Tile"
              style={{ backgroundColor: props.gridColor }}
            />
          );
        }
      } else if (ship3 !== 0) {
        if (j === 0 && size - j > 2) {
          board.push(
            <div className="Tile" style={{ backgroundColor: props.gridColor }}>
              <img
                src={Ship3}
                className="Ship3"
                alt="ship3"
                style={{ filter: props.shipColor }}
              />
            </div>
          );
          ship3 = ship3 - 1;
        } else {
          board.push(
            <div
              className="Tile"
              style={{ backgroundColor: props.gridColor }}
            />
          );
        }
      } else if (ship2 !== 0) {
        if (j === 0 && size - j > 1) {
          board.push(
            <div className="Tile" style={{ backgroundColor: props.gridColor }}>
              <img
                src={Ship2}
                className="Ship2"
                alt="ship2"
                style={{ filter: props.shipColor }}
              />
            </div>
          );
          ship2 = ship2 - 1;
        } else {
          board.push(
            <div
              className="Tile"
              style={{ backgroundColor: props.gridColor }}
            />
          );
        }
      } else if (ship1 !== 0) {
        if (i === size - 1 && size - j > 0) {
          board.push(
            <div className="Tile" style={{ backgroundColor: props.gridColor }}>
              <img
                src={Ship1}
                className="Ship1"
                alt="ship1"
                style={{ filter: props.shipColor }}
              />
            </div>
          );
          ship1 = ship1 - 1;
        } else {
          board.push(
            <div
              className="Tile"
              style={{ backgroundColor: props.gridColor }}
            />
          );
        }
      } else {
        board.push(
          <div className="Tile" style={{ backgroundColor: props.gridColor }} />
        );
      }
    }
  }
  //----------------------------------------------------------------------------------------
  //rendering the correct board
  if (size === 7) {
    return <div className="Board7">{board}</div>;
  }
  if (size === 8) {
    return <div className="Board8">{board}</div>;
  }
  if (size === 9) {
    return <div className="Board9">{board}</div>;
  }
  if (size === 10) {
    return <div className="Board10">{board}</div>;
  }
  if (size === 11) {
    return <div className="Board11">{board}</div>;
  }
  if (size === 12) {
    return <div className="Board12">{board}</div>;
  }
  if (size === 13) {
    return <div className="Board13">{board}</div>;
  }
  if (size === 14) {
    return <div className="Board14">{board}</div>;
  }
  return <div className="Board15">{board}</div>;
}

export default GameBoard;
