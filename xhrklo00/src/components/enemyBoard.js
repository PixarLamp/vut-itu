//*****************************************//
//                                         //
// file: enemyBoard.js                     //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React, {useState, useEffect} from "react";
import './gameBoard.css';
import './mainPage.css';
import Popup from "./popup";
import Ship1 from './1square.png'
import Ship2 from './2square.png'
import Ship3 from './3square.png'
import Ship4 from './4square.png'
import AyeCaptain from './aye.jpg'

let hit = [];
let miss = [];

export default function EnemyBoard(props){
    const size = props.size;
    let ship4 = props.boat4;
    let ship3 = props.boat3;
    let ship2 = props.boat2;
    let ship1 = props.boat1;
    let boardSize = "";

    // determining board size from customize to know which css class to use
    if (size === 7){ 
        boardSize = "Board7"}
    if (size === 8){ 
        boardSize = "Board8"}
    if (size === 9){ 
        boardSize = "Board9"}
    if (size === 10){ 
        boardSize = "Board10"}
    if (size === 11){ 
        boardSize = "Board11"}
    if (size === 12){ 
        boardSize = "Board12"}
    if (size === 13){ 
        boardSize = "Board13"}
    if (size === 14){ 
        boardSize = "Board14"}
    if (size === 15){ 
        boardSize = "Board15"}

    const [result, setResult] = useState(-1);

    const [endGame, setEndGame] = useState(false);
    
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    //when clicking on the enemy board the function sets the coordinates of the clicked square
    const handleClick = (j, i) => {
        setx(j)
        sety(i)
    }
    //function handling pressing the "Fire" button 
    //sends the id of pressed square to the server and waits for reply whether it was hit or miss
    const handleFire = (indexTmp) => {
        window.fetch("http://localhost:5000/Logic", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              index: indexTmp,
            }),
          }).then((response) => {
            if (!response.ok) {
              console.error(`Did not get an ok. got: ${response.statusText}`);
            }
            return response.json();
          })
          .then((json) => setResult(json))
          .catch((error) => {
            console.error(`Error getting ad data: ${error.message}`);
        });
    }

    //setting up clear board
    let board = [];
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            board.push(
                    <div className="Tile" style={{backgroundColor: props.gridColor}} onClick={() => handleClick(j, i)} />)
        }
    }
    let indexTmp = y*size + x
    //highlighting the choosen/clicked square by painting it black
    //can by changed until "Fire" is pressed
    board[indexTmp] = <div className="Tile" style={{backgroundColor: "black"}}/>

    //if the server returns 1 the chosen square was hit 
    if(result === 1){
        hit.push(indexTmp)
        setResult(-1)
    }
    //if the server returns 0 the chosen square was miss
    if (result === 0){
        miss.push(indexTmp)
        setResult(-1)
    }
    //if server returns 2 the last ship square has been found => game won
    if (result === 2){
        hit.push(indexTmp)
        setEndGame(true)
        setResult(-1)
    }
    //pushing the newly hit square into hit[]
    for (let z = 0; z < board.length; z++){
        for (let w = 0; w < hit.length; w++){
            if (hit[w] === z){
                board[z] = <div className="TileHit"></div>
            }
        }
    }
    //pushing the newly missed square into missed[]
    for (let z = 0; z < board.length; z++){
        for (let w = 0; w < miss.length; w++){
            if (miss[w] === z){
                board[z] = <div className="TileMiss" style={{backgroundColor: props.gridColor}}>X</div>
            }
        }
    }
    //rendering the board and "Fire" button
    return(
        <div className="MainPage"> 
            <div className={boardSize}> 
                {board}
            </div>
            <Popup trigger={endGame} setTrigger={setEndGame}>
                <h2>YOU WON!!</h2>
                <img src={AyeCaptain} className="captain" alt="aye"/>  
            </Popup>
            <button className="MainPage_button" onClick={() => handleFire(indexTmp)}>Fire</button>
        </div> 
    )
}