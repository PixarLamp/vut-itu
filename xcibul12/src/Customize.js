import React from 'react'
import './costumize.css'


import Boat4 from './4square.png'
import Boat3 from './3square.png'
import Boat2 from './2square.png'
import Boat1 from './1square.png'

const Customize = (props) => {
    return (
        <div>
            <h2>Board settings</h2>
            <div className="rows">
              <button className="MainPage_button" onClick={() => props.onDecrement(props.board)}> - </button>
              <h3><b>{props.board}</b> x <b>{props.board}</b></h3>
              <button className="MainPage_button" onClick={() => props.onIncrement(props.board)}> + </button>
            </div>
            <div className="rows">
            <div className="col">
                <div className="rows">
                    <img src={Boat1} alt="boat1" className="boat"/>
                    <button className="MainPage_button" onClick={() => props.onBoat1Decrement(props.boat1)}> - </button>
                    <h3><b>{props.boat1}</b></h3>
                    <button className="MainPage_button" onClick={() => props.onBoat1Increment(props.boat1)}> + </button>
                </div>
                <div className="rows">
                    <img src={Boat2} alt="boat2" className="boat"/>
                    <button className="MainPage_button" onClick={() => props.onBoat2Decrement(props.boat2)}> - </button>
                    <h3><b>{props.boat2}</b></h3>
                    <button className="MainPage_button" onClick={() => props.onBoat2Increment(props.boat2)}> + </button>
                </div>
            </div>
            <div className="col">
                <div className="rows">
                    <img src={Boat3} alt="boat3" className="boat"/>
                    <button className="MainPage_button" onClick={() => props.onBoat3Decrement(props.boat3)}> - </button>
                    <h3><b>{props.boat3}</b></h3>
                    <button className="MainPage_button" onClick={() => props.onBoat3Increment(props.boat3)}> + </button>
                </div>
                <div className="rows">
                    <img src={Boat4} alt="boat4" className="boat"/>
                    <button className="MainPage_button" onClick={() => props.onBoat4Decrement(props.boat4)}> - </button>
                    <h3><b>{props.boat4}</b></h3>
                    <button className="MainPage_button" onClick={() => props.onBoat4Increment(props.boat4)}> + </button>
                </div>
            </div>
            </div>
            <div className = "rows">
                <p><b>Ship color</b></p>
                <button className="colorButton" style={{backgroundColor: "white"}} onClick={() => props.handleShipColorWhite(props.shipColor)}>X</button>
                <button className="colorButton" style={{backgroundColor: "gray"}} onClick={() => props.handleShipColorGray(props.shipColor)}>X</button>
                <button className="colorButton" style={{backgroundColor: "black"}} onClick={() => props.handleShipColorBlack(props.shipColor)}>X</button>
            </div>
            <div className = "rows">
                <p><b>Board color</b></p>
                <button className="colorButton" style={{backgroundColor: "#fcba03"}} onClick={() => props.handleGridColorYellow(props.color)}>X</button>
                <button className="colorButton" style={{backgroundColor: "#d95050"}} onClick={() => props.handleGridColorRed(props.color)}>X</button>
                <button className="colorButton" style={{backgroundColor: "#d050d9"}} onClick={() => props.handleGridColorPurple(props.color)}>X</button>
                <button className="colorButton" style={{backgroundColor: "#83ed7e"}} onClick={() => props.handleGridColorGreen(props.color)}>X</button>
                <button className="colorButton" style={{backgroundColor: "#dae8fc"}} onClick={() => props.handleGridColorDef(props.color)}>X</button>
            </div>
            
            <button className="MainPage_button" onClick={() => props.onDefault(props.board)}>back to default</button>
            {/* <button className="MainPage_button" onClick={() => props.onSave(props.board)}>save settings</button> */}
        </div>
    )
}
export default Customize;
