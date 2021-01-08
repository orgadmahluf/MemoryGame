import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Game.css';
import qustionMark from '../images/siman.jpg';
export default function Game(props) {

const show3 = (i,e) =>{
    if(!props.flag3[i]){
        return `url(${e})`
    }
    else{
        return ''
    }
}

const show  = () =>{
    if(!props.flag){
        return props.players.player1.name
    }
    else{
        return props.players.player2.name
    }
}
const show2 = (e,i) =>{

    if(props.flag2[i]==false){

        return<div style={{display:'inline-flex'}}>
            <Link className='Card' to='/finish'  style={{pointerEvents:props.disable,border:props.border[i],backgroundImage:`url(${qustionMark})`}} onClick={(x)=>{props.val(e,i,x)}}></Link>
        </div>
    }
    else{
        return <div style={{border:props.border[i],animation:props.animation[i],backgroundImage:show3(i,e)}} className={`${props.cardClass[i]}`}></div>
    }

}


    return (
        <div>
            
            <h1>התור של  {show()}</h1>
            {props.cards.map((e,index)=>{
                return show2(e,index)
            })}


        </div>
    )
}
