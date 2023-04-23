//*****************************************//
//                                         //
// file: Game.js                           //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React, { useState} from 'react'
import './mainPage.css';
import Board from './gameBoard';
import EnemyBoard from './enemyBoard';
import './gamePage.css';
import battleship from './battleship.png';
import Popup from './popup';

const Game = () => {
    //getting data from local storage
    const boardSize = JSON.parse(localStorage.getItem("boardSize"));
    const boat1 = JSON.parse(localStorage.getItem("boat1"));
    const boat2 = JSON.parse(localStorage.getItem("boat2"));
    const boat3 = JSON.parse(localStorage.getItem("boat3"));
    const boat4 = JSON.parse(localStorage.getItem("boat4"));
    const gridColor = JSON.parse(localStorage.getItem("gridColor"));
    const shipColor = JSON.parse(localStorage.getItem("shipColor"));

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div>
      <div className="col">
        <img src={battleship} className="MainPage_title" alt="title"/>
      </div>
      <div className="top_right">
        <button className="MainPage_button" onClick={() => setButtonPopup(true)}>
          Help
        </button>
        {/* Text in popup window containing instructions when "Help" is pressed */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2> IT'S GAME TIMEEE !! </h2>
          <p><b>1.</b> click on enemy board to choose your target</p>
          <p><b>2.</b> click <b>Fire</b> to shoot</p>
          <p><b>Winner is the player who sinks all the opponent's ships first</b></p>
          <h3><b>Good luck sailor !!</b></h3>
        </Popup>
      </div>
      <div className="top_left">
      </div>
      <div className="rows">
        <div>
          <h2>You</h2> 
          <Board size={boardSize} boat4={boat4} boat3={boat3} boat2={boat2} boat1={boat1} gridColor={gridColor} shipColor={shipColor}/>
          <div className="col">
            <button className="fake_button">
              Randomize
            </button>
            <button className="fake_button">
              Play
            </button>
          </div>
        </div>
        <div className="col">
          <button className="fake_button">
            Costumize
          </button>
          <button className="fake_button">Fake</button>
        </div>
        <div>
          <h2>Enemy</h2>
          {/* calling enemyBoard.js to be able to press on the board and determin hit/miss */}
          <EnemyBoard size={boardSize} boat4={0} boat3={0} boat2={0} boat1={0} gridColor={gridColor} shipColor={shipColor} />
          <div className="col">
            <button className="fake_button">Fake</button>
          </div>
        </div>
      </div>
    </div>
    )

}

export default Game;