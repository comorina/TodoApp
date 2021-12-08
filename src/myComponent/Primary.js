import React from 'react';
import './Primary.css'
import { Link } from 'react-router-dom';

export default function Primary() {
    // For PopUp Alert after click on Button.
    const shoot = () => {
        var t=document.getElementById("name").value;
        alert("Welcome "+t+"!");
      }
    return (
        // Frame Design here.
        <div className='container'>
            <header>
            <div className='fit'></div>
                <h1 className='t'>Todo App</h1>
            </header>
            <p className='usr'>Username</p>
            <input type='text' id= 'name'placeholder='John Doe' autoFocus required/><br/>
            <div>
            <Link to ={'/TodoAdd'}>
            
            <button type='button'onClick={shoot} className="startbtn">START</button></Link></div>
        </div>
    )
}

