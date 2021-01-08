import React from 'react'
import {Link} from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Finish(props) {
    const show = () =>{
        if(props.gameTied==true){
            return 'Game Tied!'
        }

        else if(!props.flag){
            return `${props.players.player1.name} ניצח`;
        }
        else{
            return `${props.players.player2.name} ניצח`;
        }
    }
    return (
        <div>
            <h1>המשחק הסתיים</h1>
            <h3>{show()}</h3>
            {/* <h3>{props.players.player1.win} - {props.players.player2.win}</h3> */}
            <Link className='button' to='/game' onClick={()=>{props.newGame()}}><AwesomeButton type="primary">משחק חדש</AwesomeButton></Link>
        </div>
    )
}
