//*****************************************//
//                                         //
// file: gamePage.js                       //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React, { useEffect, useState } from 'react';
import './mainPage.css';
import Board from './gameBoard';
import './gamePage.css';
import battleship from './battleship.png';
import Popup from './popup';
import Costumize from './costumize';

// const board =[1,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,1]
let board = [];

// const hitpoints = 20;

const GamePage = ({navigation}) => {
  
  
  // function responsible for switching back to main/entry page after "Back" button is pressed
  const onClickHandler = () => {
    navigation.navigate('mainPage');
  }
  //author: xvanoj00 - Jakub Vano
  //---------------------------------------------------------------------------- start
  //connecting to server and switching to page for playing the game after button "Play" pressed
  const playgame = () => {
    window.fetch("http://localhost:5000/Play", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enemy: board,
        hitpoints: hitpoints,
      }),
    }).catch((error) => {
      console.error(error);
    });
    //switching to play game page
    navigation.navigate('Game');
  }
  //---------------------------------------------------------------------------- end

  //initializing board setup --> default board settings
  const [buttonPopup, setButtonPopup] = useState(false);
  const [costumizePopup, setCostumizePopup] = useState(false);
  const [boardSize, setBoardSize] = useState(10);
  const [boat1, setBoat1] = useState(4);
  const [boat2, setBoat2] = useState(3);
  const [boat3, setBoat3] = useState(2);
  const [boat4, setBoat4] = useState(1);
  const [gridColor, setGridColor] = useState("#dae8fc");
  const [shipColor, setShipColor] = useState("invert(0%)");

  //author: xvanoj00 - Jakub Vano
  //---------------------------------------------------------------------------- start
  //local storage setup
useEffect(() => {
  localStorage.setItem("boardSize", JSON.stringify(boardSize));
}, [boardSize]);
useEffect(() => {
    localStorage.setItem("boat1", JSON.stringify(boat1));
  }, 
    [boat1],
  );
useEffect(() => {
  localStorage.setItem("boat2", JSON.stringify(boat2));
  },
    [boat2],
  );
useEffect(() => {
    localStorage.setItem("boat3", JSON.stringify(boat3));
  }, 
    [boat3],
  );
useEffect(() => {
    localStorage.setItem("boat4", JSON.stringify(boat4));
  }, 
    [boat4],
  );
useEffect(() => {
    localStorage.setItem("gridColor", JSON.stringify(gridColor));
  }, 
    [gridColor],
  );
useEffect(() => {
    localStorage.setItem("shipColor", JSON.stringify(shipColor));
  }, 
    [shipColor],
  );
 //---------------------------------------------------------------------------- end

 //functions used in costumize.js for creating dynamicly changed board
 //after called in costumize.js sets color of the displayed ships
  const handleShipColorBlack = () =>{
    setShipColor("invert(0%)")
  }
  const handleShipColorGray = () =>{
    setShipColor("invert(50%)")
  }
  const handleShipColorWhite = () =>{
    setShipColor("invert(100%)")
  }
  //after called in costumize.js sets color of the grid
  const handleGridColorRed = () => {
    setGridColor("#d95050")
  }
  const handleGridColorYellow = () => {
    setGridColor("#fcba03")
  }
  const handleGridColorPurple = () => {
    setGridColor("#d050d9")
  }
  const handleGridColorGreen = () => {
    setGridColor("#83ed7e")
  }
  const handleGridColorDef = () =>{
    setGridColor("#dae8fc")
  }

  //after called in costumize.js sets all the settings changed in costumize back to default settings
  const handleDefault = () => {
    setBoardSize(10)
    setBoat1(4)
    setBoat2(3)
    setBoat3(2)
    setBoat4(1)
    setGridColor("#dae8fc")
    setShipColor("invert(0%)")
  }

  //after called in costumize.js decreases the game board size and handles ship restrictions for smaller board
  const boardDecrement = () => {
    if(boardSize > 7){
      if (boardSize - 1 < 10){
        if (boat1 > 7){ setBoat1(4) }
        if(boat2 > 3){ setBoat2(3) }
        if(boat3 > 2){ setBoat3(2) }
        if(boat4 > 1){ setBoat4(1) }
      }
      if (boardSize - 1 > 9 && boardSize - 1 < 13){
        if(boat2 > 4){ setBoat2(3) }
        if(boat3 > 3){ setBoat3(2) }
        if(boat4 > 2){ setBoat4(1) }
      }
      if (boardSize - 1 > 12 && boardSize - 1 < 15){
        if(boat3 > 4){ setBoat3(2) }
        if(boat4 > 3){ setBoat4(1) }
      }
      setBoardSize(boardSize - 1)
    }
  }

  //after called in costumize.js increases the game board size
  const boardIncrement = () => {
    if(boardSize < 15)
    setBoardSize(boardSize + 1)
  }

  //following functions are all called in costumize.js and they all increment/dectrement no. of different types of ships 
  //after they chceck if they are allowed to increment (have large enough board size for as many ships)
  const boat1Decrement = () => {
    if(boat1 > 0)
    setBoat1(boat1 - 1)
  }
  const boat1Increment = () => {
    if(boardSize < 10 && boat1 < 7){
      setBoat1(boat1 + 1)
    }
    if(boardSize > 9 && boat1 < 10){
      setBoat1(boat1 + 1)
    }
  }

  const boat2Decrement = () => {
    if(boat2 > 0)
    setBoat2(boat2 - 1)
  }
  const boat2Increment = () => {
    if(boardSize < 10 && boat2 < 3){
      setBoat2(boat2 + 1)
    }
    if(boardSize > 9 && boardSize < 13 && boat2 < 4){
      setBoat2(boat2 + 1)
    }
    if(boardSize > 12 && boardSize < 16 && boat2 < 5){
      setBoat2(boat2 + 1)
    }
  }

  const boat3Decrement = () => {
    if(boat3 > 0)
    setBoat3(boat3 - 1)
  }
  const boat3Increment = () => {
    if(boardSize < 10 && boat3 < 2){
      setBoat3(boat3 + 1)
    }
    if(boardSize > 9 && boardSize < 13 && boat3 < 3){
      setBoat3(boat3 + 1)
    }
    if(boardSize > 12 && boardSize < 15 && boat3 < 4){
      setBoat3(boat3 + 1)
    }
    if(boardSize === 15 && boat3 < 5){
      setBoat3(boat3 + 1)
    }
  }

  const boat4Decrement = () => {
    if(boat4 > 0)
    setBoat4(boat4 - 1)
  }
  const boat4Increment = () => {
    if(boardSize < 10 && boat4 < 1){
      setBoat4(boat4 + 1)
    }
    if(boardSize > 9 && boardSize < 13 && boat4 < 2){
      setBoat4(boat4 + 1)
    }
    if(boardSize > 12 && boardSize < 15 && boat4 < 3){
      setBoat4(boat4 + 1)
    }
    if(boardSize === 15 && boat4 < 4){
      setBoat4(boat4 + 1)
    }
  }

  let ship4 = boat4;
  let ship3 = boat3;
  let ship2 = boat2;
  let ship1 = boat1;
  let wait = 0;
  
  for (let i = 0; i < boardSize; i++){
    for (let j = 0; j < boardSize; j++){
      if (ship4 !== 0 && boardSize - 4 > j && i%2 === 0 && wait === 0){
        board.push(1);
        board.push(1);
        board.push(1);
        board.push(1);
        board.push(0);
        wait = 4;
        ship4 = ship4 - 1;
        console.log("4")
      }
      else if (ship3 !== 0 && boardSize - 3 > j + 1 && i%2 === 0 && wait === 0){
        board.push(1);
        board.push(1);
        board.push(1);
        board.push(0);
        wait = 3;
        ship3 = ship3 - 1;
        console.log("3")
      }
      else if (ship2 !== 0 && boardSize - 2 > j + 1 && i%2 === 0 && wait === 0){
        board.push(1);
        board.push(1);
        board.push(0);
        wait = 2;
        ship2 = ship2 - 1;
        console.log("2")
      }
      else if (ship1 !== 0 && boardSize - 1 > j + 1 && i%2 === 0 && wait === 0){
        board.push(1);
        board.push(0);
        wait = 1;
        ship1 = ship1 - 1;
      }
      else if (wait !== 0){
        wait = wait - 1;
      }
      else{
        board.push(0);
      }
    }
  }
  let hitpoints = 4*boat4 + 3*boat3 + 2*boat2 + 1*boat1

  return(
    <div>
      <div className="col">
        <img src={battleship} className="MainPage_title" alt="title"/>
      </div>
      <div className="top_right">
        <button className="MainPage_button" onClick={() => setButtonPopup(true)}>
          Help
        </button>
        {/* text showen in pupup after button "Help" is pressed */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>What now?</h2>
          <h3><b>Position your ships by dragging them across your board</b></h3>
          <p>click on the ship if you want to rotate it</p>
          <p>click <b>Randomize</b> if you want to reposition your ships randomly</p>
          <p>you can change settings and looks of the boards by clicking <b>Costumize</b></p>
          <p>once you set up your board click <b>Play</b></p>
        </Popup>
      </div>
      <div className="top_left">
        {/* opens up start page when pressed */}
        <button className="MainPage_button" onClick={onClickHandler}>
          Back
        </button>
      </div>
      <div className="rows">
        <div>
          <h2>You</h2> 
          {/* creates board containing all the ships passed into it*/}
          <Board size={boardSize} boat4={boat4} boat3={boat3} boat2={boat2} boat1={boat1} gridColor={gridColor} shipColor={shipColor}/>
          <div className="col">
            <button className="MainPage_button">
              Randomize
            </button>
            {/* opens up the actual game page and starts server */}
            <button onClick={playgame} className="MainPage_button">
              Play
            </button>
            
          </div>
        </div>
        <div className="col">
          {/* opens up customize popup containing all the board settings */}
          <button className="MainPage_button" onClick={() => setCostumizePopup(true)}>
            Customize
          </button>
          <Popup trigger={costumizePopup} setTrigger={setCostumizePopup}>
            {/* creating customize content in the popup window by calling it here and passing it all the params and functions from above */}
            <Costumize 
              onDefault={handleDefault} 
              board={boardSize} 
              onIncrement={boardIncrement} 
              onDecrement={boardDecrement}
              boat1={boat1}
              boat2={boat2}
              boat3={boat3}
              boat4={boat4}
              onBoat1Increment={boat1Increment}
              onBoat1Decrement={boat1Decrement}
              onBoat2Increment={boat2Increment}
              onBoat2Decrement={boat2Decrement}
              onBoat3Increment={boat3Increment}
              onBoat3Decrement={boat3Decrement}
              onBoat4Increment={boat4Increment}
              onBoat4Decrement={boat4Decrement}
              gridColor = {gridColor}
              handleGridColorRed = {handleGridColorRed}
              handleGridColorYellow = {handleGridColorYellow}
              handleGridColorPurple = {handleGridColorPurple}
              handleGridColorGreen = {handleGridColorGreen}
              handleGridColorDef = {handleGridColorDef}
              shipColor = {shipColor}
              handleShipColorBlack = {handleShipColorBlack}
              handleShipColorGray = {handleShipColorGray}
              handleShipColorWhite = {handleShipColorWhite}
            />
          </Popup>
          <button className="fake_button">Fake</button>
        </div>
        <div>
          <h2>Enemy</h2>
          {/* creating empty enemy board with the same color and size settings */}
          <Board size={boardSize} boat4={0} boat3={0} boat2={0} boat1={0} gridColor={gridColor} shipColor={shipColor}/>
          <div className="col">
            <button className="fake_button">Fake</button>
            <button className="fake_button">Fake</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage;