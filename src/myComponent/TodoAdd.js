//import { getByLabelText } from '@testing-library/react'
import React from 'react';
import { Link } from 'react-router-dom';
import './TodoAdd.css';


export default function TodoAdd(){
    function myfunction(){
        alert("Successfully Todo Add");
    }
    return(
        <div>
            <header>
                <div className='fit'></div>
                <h1 className='t'>Todo App</h1>
            </header>
            <p className='para'>Here you can add Todo.</p>
            <input type='text' className='inpt' placeholder='Title.. .' autoFocus required/><br/>
            <div>
            <Link to='/TodoList'>
            <button type="button" onclick={myfunction} className="addbtn">Add</button>
            </Link></div>
        </div>
    )
}
