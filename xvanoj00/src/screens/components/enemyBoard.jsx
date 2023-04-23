//autor: Jakub Vano (xvanoj00)

import React, { useState, useEffect } from "react";
import "./gameBoard.css";

let hit = [];
let miss = [];

export default function EnemyBoard(props) {
  //handling end of game
  const handleEnd = () => {
    props.setEnd(true);
    hit = [];
    miss = [];
  };
  //autor: Zuzana Hrklova xhrklo00
  //----------------------------------------------------------------------------------------
  const size = props.size;
  let boardSize = "";
  if (size === 7) {
    boardSize = "Board7";
  }
  if (size === 8) {
    boardSize = "Board8";
  }
  if (size === 9) {
    boardSize = "Board9";
  }
  if (size === 10) {
    boardSize = "Board10";
  }
  if (size === 11) {
    boardSize = "Board11";
  }
  if (size === 12) {
    boardSize = "Board12";
  }
  if (size === 13) {
    boardSize = "Board13";
  }
  if (size === 14) {
    boardSize = "Board14";
  }
  if (size === 15) {
    boardSize = "Board15";
  }
  //----------------------------------------------------------------------------------------
  //state for hit/miss
  const [result, setResult] = useState(-1);
  //state for x,y coordinates
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  //handling click on enemy board
  const handleClick = (j, i) => {
    setx(j);
    sety(i);
    let index = i * size + j;
    window
      .fetch("http://localhost:5000/Logic", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index: index,
        }),
      })
      .then((response) => {
        if (!response.ok) {
          console.error(`Did not get an ok. got: ${response.statusText}`);
        }
        return response.json();
      })
      .then((json) => setResult(json))
      .catch((error) => {
        console.error(`Error getting ad data: ${error.message}`);
      });
  };

  //autor: Zuzana Hrklova (xhrklo00)
  //----------------------------------------------------------------------------------------
  let board = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board.push(
        <div
          className="Tile"
          style={{ backgroundColor: props.gridColor }}
          onClick={() => handleClick(j, i)}
        />
      );
    }
  }
  let indexTmp = y * size + x;
  board[indexTmp] = (
    <div className="Tile" style={{ backgroundColor: "black" }} />
  );

  if (result === 1) {
    hit.push(indexTmp);
    setResult(-1);
  }
  if (result === 0) {
    miss.push(indexTmp);
    setResult(-1);
  }
  if (result === 2) {
    hit.push(indexTmp);
    setResult(-1);
    {
      handleEnd();
    }
  }

  for (let z = 0; z < board.length; z++) {
    for (let w = 0; w < hit.length; w++) {
      if (hit[w] === z) {
        board[z] = <div className="TileHit"></div>;
      }
    }
  }
  for (let z = 0; z < board.length; z++) {
    for (let w = 0; w < miss.length; w++) {
      if (miss[w] === z) {
        board[z] = (
          <div
            className="TileMiss"
            style={{ backgroundColor: props.gridColor }}
          >
            X
          </div>
        );
      }
    }
  }
  //----------------------------------------------------------------------------------------
  return <div className={boardSize}>{board}</div>;
}
