//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Primary from './myComponent/Primary';
import TodoAdd from './myComponent/TodoAdd';
import TodoList from './myComponent/TodoList';

//--------------------------------------------------------------------------->

export default function Lin(){
    return(
        <Router>
            
            <div>
                <Link to ='/'></Link>
            </div>
            <div >
                <Link to ='/todoadd'></Link>
            </div>
            <div >
                <Link to ='/todolist'></Link>
            </div>
           

            <Switch>
                <Route exact path="/">
                   <Primary/>
                </Route>  
                <Route exact path='/todoadd'>
                    <TodoAdd/>
                </Route>     
                <Route exact path='/todolist'>
                    <TodoList/>
                </Route>            
            </Switch>
            
        </Router>
    );
}

ReactDOM.render(<Lin/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
