/* Autor: Kateřina Cibulcová (xcibul 12) */
/* Generovani pozic lodicek */




export default function createShips(size){

    /* Generovani pozic lodicek */
    var enemyShips = [
        [5,5], [5,6], [5,7], [5,8],
        [1,2], [1,3], [1,4],
        [7,7], [7,8], [7,9],
        [7,2], [8,2],
        [0,9], [1,9],
        [5,0], [6,0],
        [2,6], 
        [3,7], 
        [9,4], 
        [7,4],

     ]
     
     var board = new Array(100).fill(0);
    
     /* Pole pozic lodicek */
     for (let i = 0; i < enemyShips.length; i++) {
         var ship = enemyShips[i]
         var ship_position = ship[1] * size + ship[0]
        
         board[ship_position] = 1

     }
     
        /* Zasilani pozic lodi na backend server */

        window.fetch("http://localhost:5000/Play", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        enemy: board,
        hitpoints: enemyShips.length,
        }),
        }).catch((error) => {
        console.error(error);
        });
    
}



 