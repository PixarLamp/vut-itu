/* Autor: Kateřina Cibulcová (xcibul 12) */

import React from "react";

/* Generovani samotneho policka a jeho funkcionalita */
class Square extends React.Component {
 
    constructor(props) {
        
        super(props);
        this.state = {
            x: null,
            y: null,
            isShip: false,
            isEnemyShip: this.props.isEnemyShip,
            square_class: "empty_square",
            hitted: false,
            disabled: false,
            show: true,

          };
            
      }
      
    /* Policko reaguje na kliknuti */

    handleClick () {

         /* Komunikace s backend serverem o stavu policka */

        window.fetch("http://localhost:5000/Logic", 
        {
            method: "POST",
            headers: 
            {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify ({  index: this.props.size * this.props.y + this.props.x }),
        }).then((response) => {
            if (!response.ok) {
              console.error(` ${response.statusText}`);
            }
            return response.json();
          })
          .then((json) => {if (json === 1 || json === 2) {
            /* Funkcionalita stavu policka - jestli je zasazena lod ci ne */

            this.setState({hitted: true})
            this.props.cb()
            this.setState({square_class: "enemy_square"})
            this.setState({disabled: true});

            /* Vyskakovaci okno pri vyhre */

            if (json === 2) {
                alert("You win!");
                window.location.reload(false);
            }

        } else {
            this.setState({square_class: "miss_square"})

        }})
          .catch((error) => {
            console.error(`${error.message}`);
        });

        
      }
        
      handleClickProp = this.handleClick.bind(this); 

    render () {

        return(
            /* Generovani samotne komponenty */
            <div>
                <button 
                        className={this.state.square_class}
                        onClick={this.handleClickProp}
                        disabled={this.state.disabled}
                        >
                            
                </button>
                
                
            </div>
            
        );
    }
    

}

export default React.memo(Square);