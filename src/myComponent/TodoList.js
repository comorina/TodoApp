import bin from'./bin.png'; // Image Import here.. 
import edit from'./edit.png';
import React from 'react';
import './TodoList.css';
import { Link } from 'react-router-dom';



export default function TodoList(){
    return(
        <div>
            <header>
                <div className='fit'></div>
                <h1>Todo App</h1>
            </header>
            <p className='para1'>All Todo List.</p>
            <hr/>
            <div>
                <input type='text' id ='editcontent'/><button type='button'>Edit</button>
            </div><br/><br/>

            <p style={{fontSize:'20px', fontWeight:'bold', marginLeft:'50px'}}>Apple
                <div>
                    <Link to={'/TodoAdd'}>
                        <input type='image' src={edit} style={{float:'right', marginLeft:'50px', width:'20px', height:'20px',boxShadow:'0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)'}}/>
                    </Link>
                </div>
                <div>
                    <Link to ='/TodoAdd'>
                        <input type='image' src={bin} style={{float:'right', left:'50px', width:'20px', height:'20px', boxShadow:'0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)'}}/>
                    </Link>
                </div>
            </p>
        </div>
    );
}