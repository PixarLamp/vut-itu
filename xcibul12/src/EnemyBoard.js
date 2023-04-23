/* Autor: Kateřina Cibulcová (xcibul 12) */

import React, {useState, useEffect} from "react";
import './gameBoard.css';
import Square from './Square'
import './index.css'

/* Generovani nepratelske hraci plochy */


export default function EnemyBoard(props){
    var size = props.size;
    
    
    
    const [hits, setHits] = useState(0);

    
    var board = []
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col ++) {

            /* Generovani nepratelske hraci plochy z policek (komponenta Square) */

            board.push(<Square key={JSON.stringify([row,col])} x={row} y={col} size={size} cb={cb}/>)
            
        }
    }

    /* Callback funkce pro nacitani bodu */

    function cb() {
        setHits(hits + 1)
    }
    return(
    
        /* Generovani samotne plochy */
        <div className='enemyboard'>
            {board}
            <p>Hits: {hits}</p>
        </div>
    );
}