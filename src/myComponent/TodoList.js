import bin from'./bin.png'; // Image Import here.. 
import edit from'./edit.png';
import React from 'react';
import './TodoList.css';
//import { Link } from 'react-router-dom';



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
                <input type='text' id ='editcontent'/>
                <button type='button' className="editbtn">Edit</button>
            </div><br/><br/>

            <table>
                <tr>
                    <td><h3 className="Listname">Apple</h3></td>
                    <td>
                        
                            <button className="btn"> <img src={bin} className="btnsize"/> </button>
                            < button className="btn1"> <img src={edit} className="btnsize"/> </button>
                        
                    </td>
                </tr>
            </table>
            
        </div>
    );
}