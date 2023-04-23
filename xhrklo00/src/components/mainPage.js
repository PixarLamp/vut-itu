//*****************************************//
//                                         //
// file: mainPage.js                       //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React, { useState } from 'react';
import pic_mpg from './battleships_mpg.png';
import './mainPage.css';
import battleship from './battleship.png';
import Popup from './popup';

const MainPage = ({navigation}) => {
    // function responsible for opening new page when button "Play" is pressed
    const onClickHandler = () => {
      navigation.navigate('gamePage');
    };

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="MainPage">
            <header className="MainPage_header">
                <img src={battleship} className="MainPage_title" alt="title"/>
                <img src={pic_mpg} className="MainPage_pic_mpg"alt="pic_mpg"/>
                <div>
                    <button className="MainPage_button" onClick={onClickHandler}>Play</button>
                    <button className="MainPage_button" onClick={() => setButtonPopup(true)}>Tutorial</button>    
                </div>
                {/* text showen in pupup after button "Tutorial" is pressed */}
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h2>How to play</h2>
                    <p><b>Goal is to sink all the opponents ships</b></p>
                    <h3>How?</h3>
                    <p><b>1.</b> position ships on your board and press <b>Play</b></p>
                    <p><b>2.</b> fire on opponents ships by clicking chosen square of their board and press <b>Fire</b></p>
                    <p><b>3.</b> if you hit one of the opponent's ships it's your turn again, however if you miss it's your opponent's turn</p>
                    <p><b>Game ends when one of the players shoots all of their opponent's ships</b></p>
                    <h4>Now that you all set press <b>Play</b> to set your board</h4>
                </Popup>
            </header>
        </div>
      )
}

export default MainPage;