/* Autori: Zuzana Hrkľová (xhrklo00), Jakub Vaňo (xvanoj00), Kateřina Cibulcová (xcibul12)*/

import React from "react";
import { useState } from 'react';
import Board from './Board'
import EnemyBoard from "./EnemyBoard";
import Image from "./images/Daco_4452968.png";
import Popup from "./Popup.js"
import Costumize from './Customize';
import './gameBoard.css';
import createShips from "./Ships";

/* Generovani uvodni stranky, obou hracich ploch a tlacitek pro nastaveni a tutorial */
/* Autori: Zuzana Hrkľová, Jakub Vaňo */

function Game() {
    const [on, setOn] = useState(false)
    const [showing, setShowing] = useState('inline')
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [costumizePopup, setCostumizePopup] = useState(false);

    const [boardSize, setBoardSize] = useState(10);
    const [boat1, setBoat1] = useState(4);
    const [boat2, setBoat2] = useState(3);
    const [boat3, setBoat3] = useState(2);
    const [boat4, setBoat4] = useState(1);

    const [gridColor, setGridColor] = useState("#dae8fc");
    const [shipColor, setShipColor] = useState("invert(0%)");

    const handleShipColorBlack = () =>{
        setShipColor("invert(0%)")
    }
    const handleShipColorGray = () =>{
        setShipColor("invert(50%)")
    }
    const handleShipColorWhite = () =>{
        setShipColor("invert(100%)")
    }

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

    const handleDefault = () => {
        setBoardSize(10)
        setBoat1(4)
        setBoat2(3)
        setBoat3(2)
        setBoat4(1)
        setGridColor("#dae8fc")
        setShipColor("invert(0%)")
    }

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
    const boardIncrement = () => {
        if(boardSize < 15)
        setBoardSize(boardSize + 1)
    }

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

    function startGame() {
        setOn(true);
        setShowing('none');
        createShips(boardSize);
        
    }


    /* Generovani uvodni stranky */
    /* Autor: Kateřina Cibulcová (xcibul12) */
    return(
        <div>
            <header>
          <h1> Battleships</h1>
            </header>
        <div>
            <div className="img-container">
                <img src={Image} alt="Battleships" className="image" style={{width: "100%", display: showing }}/>
                    <div className="middle">
                        <button className="start" onClick={startGame} style={{display: showing }}> Start game </button>
                    </div>
            </div>
        </div>    
            
        <div>
            {on === true &&

                <div className="container">
                    <h1 className="you">You</h1>
                    <div className="board">
                        

                    <Board size={boardSize} boat4={boat4} boat3={boat3} boat2={boat2} boat1={boat1} gridColor={gridColor} shipColor={shipColor}/>
                    </div>
                    
                    
                    <h1 className="enemy">Enemy</h1>
                    <div className="enemyboard">
                        
                            
                    <EnemyBoard size={boardSize} boat4={0} boat3={0} boat2={0} boat1={0} gridColor={gridColor} shipColor={shipColor}/>
                        
                    </div>

                </div>
            }
        </div>
        <div>
            
            {on === true &&
            /* Generovani popup okna pro nastaveni */
            /* Autori: Zuzana Hrkľová (xhrklo00), Jakub Vaňo (xvanoj00)*/

                 <div className="customize-container">
                    <button className="MainPage_button" onClick={() => setButtonPopup(true)}>
                        Help
                    </button>
                    <button className="MainPage_button" onClick={() => setCostumizePopup(true)}>
                        Customize
                    </button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h2>What now?</h2>
                        <h3>For choosing number and color of your ships, size and color of your grid click <b>CUSTOMIZE</b>.</h3>
                        
                        <h3>Try to hit enemy ships by clicking on the <b>ENEMY</b> grid.</h3>
                        
                    </Popup>

                    <Popup trigger={costumizePopup} setTrigger={setCostumizePopup}>
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

                 
                 </div>
             }
        </div>
             
        </div>
    );
}

export default Game;