/* Autori: Zuzana Hrkľová (xhrklo00), Jakub Vaňo (xvanoj00)*/
import React, {useState} from "react";
import './gameBoard.css';
import Ship1 from './1square.png'
import Ship2 from './2square.png'
import Ship3 from './3square.png'
import Ship4 from './4square.png'

/* Generovani hraci plochy a propojeni s nastavenim */


export default function Board(props){
    const size = props.size;
    let ship4 = props.boat4;
    let ship3 = props.boat3;
    let ship2 = props.boat2;
    let ship1 = props.boat1;
    let boardSize = "";

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

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true)
    }

    let board = [];
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
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
            else{ board.push(<div className="Tile" style={{backgroundColor: clicked ? 'black' : props.gridColor}} onClick={handleClick} />) }
        }
    }

    return( 
        <div className={boardSize}> 
            {board}
        </div> 
    ); 
}