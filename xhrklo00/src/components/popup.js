//*****************************************//
//                                         //
// file: pupup.js                          //
// author: xhrklo00 - Zuzana Hrkľová       //
// date: 12/5/2021                         //
//                                         //
//*******************************************

import React from 'react'
import './popup.css'

//when called creates an empty pupup window with close button
function popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default popup
