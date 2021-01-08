import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './HomePage.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Homepage(props) {

    const [user1, setUser1] = useState('');
    const [user2, setUser2] = useState('');
    const val = (e) =>{

        if(user1==''||user2==''){
            e.preventDefault();
                return alert('הכניסו שמות של 2 שחקנים');
        }

        // for (let i = 0; i < user1.length; i++) {
        //     if(!(user1.charAt(i)>='a'&&user1.charAt(i)<='z'||user1.charAt(i)>='A'&&user1.charAt(i)<='Z')){
        //         e.preventDefault();
        //         return alert('שם השחקן יכיל רק אותיות');
        //     }
            
        // }
        // for (let i = 0; i < user2.length; i++) {
        //     if(!(user2.charAt(i)>='a'&&user2.charAt(i)<='z'||user2.charAt(i)>='A'&&user2.charAt(i)<='Z')){
        //         e.preventDefault();
        //         return alert('שם השחקן יכיל רק אותיות ');
        //     }
            
        // }
        props.addPlayers(user1,user2);
        props.shuffle();
        props.generateIdPerCard();
        
    }

    return (
        <div className='homePage'>
            <h1>משחק זיכרון - שירי וסיפורי חיים נחמן ביאליק</h1>
            <input className='players' placeholder='שם של שחקן ראשון'onChange={(e)=>{setUser1(e.target.value)}}/><br/>
            <input className='players' placeholder='שם של שחקן שני' onChange={(e)=>{setUser2(e.target.value)}}/><br/>
            <Link className='button' to='/game' onClick={(e)=>{val(e)}}><AwesomeButton type="primary">בואו נתחיל</AwesomeButton></Link>
        </div>
    )
}
