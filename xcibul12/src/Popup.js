/* Autori: Zuzana Hrkľová (xhrklo00), Jakub Vaňo (xvanoj00)*/
/* Popup komponenta */
import React from 'react'
import './popup.css'

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
