//*****************************************//
//                                         //
// file: enemyBoard.js                     //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React, {useState} from "react";
import './gameBoard.css';
import Ship1 from './1square.png'
import Ship2 from './2square.png'
import Ship3 from './3square.png'
import Ship4 from './4square.png'

export default function GameBoard(props){
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
    
    //creating board by pushing tiles eather empty or containing boat
    let board = [];
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            // if there are still some 4 square ships needed to be placed put the ship on the board
            if (ship4 !== 0){
                if(j === 0){
                    board.push(
                    <div className="Tile" style={{backgroundColor: props.gridColor}}>
                        <img src={Ship4} className="Ship4" alt="ship4" style={{filter:  props.shipColor}}/>
                    </div>)
                    ship4 = ship4 - 1            
                }
                else{ board.push(<div className="Tile" style={{backgroundColor: props.gridColor}}/>) }
            }
            // if there are none 4 square ships left and 3 square ships need to be placed put the ship on the board
            else if (ship3 !== 0){
                if(j === 0 && size - j > 2){
                    board.push(
                        <div className="Tile" style={{backgroundColor: props.gridColor}}>
                            <img src={Ship3} className="Ship3" alt="ship3" style={{filter:  props.shipColor}}/>
                        </div>)
                    ship3 = ship3 - 1            
                }
                else{ board.push(<div className="Tile" style={{backgroundColor: props.gridColor}}/>) }
            }
            // if there are none 3 square ships left and 2 square ships need to be placed put the ship on the board
            else if (ship2 !== 0){
                if(j === 0 && size - j > 1){
                    board.push(
                        <div className="Tile" style={{backgroundColor: props.gridColor}}>
                            <img src={Ship2} className="Ship2" alt="ship2" style={{filter:  props.shipColor}}/>
                        </div>)
                    ship2 = ship2 - 1            
                }
                else{ board.push(<div className="Tile" style={{backgroundColor: props.gridColor}}/>) }
            }
            // if there are none 2 square ships left and 1 square ships need to be placed put the ship on the board
            else if (ship1 !== 0){
                if(i === size - 1 && size - j > 0){
                    board.push(
                        <div className="Tile" style={{backgroundColor: props.gridColor}}>
                            <img src={Ship1} className="Ship1" alt="ship1" style={{filter:  props.shipColor}}/>
                        </div>)
                    ship1 = ship1 - 1            
                }
                else{ board.push(<div className="Tile" style={{backgroundColor: props.gridColor}}/>) }
            }
            // if there are no ships left place empty tiles
            else{ board.push(<div className="Tile" style={{backgroundColor: props.gridColor}}/>) }
        }
    }

    //rendering the board 
    return( 
        <div className={boardSize}> 
            {board}
        </div> 
    ); 
}