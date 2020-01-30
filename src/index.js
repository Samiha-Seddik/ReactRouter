import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home'
import Services from './services'

import * as serviceWorker from './serviceWorker';
import {Route ,Link, NavLink,BrowserRouter as Router} from 'react-router-dom'
import Sousservice from './sousservice';
import Contact from './contact';

const Routing =(
<Router>
<nav >
<ul className =' links   '>
    <li className ='mx-1 mt-2  '>
        <NavLink exact to = '/Home' className = 'default-style'activeClassName ='active-style' style={{ textDecoration: 'none' }}>
            Home
        </NavLink> 
    </li>    
    <li className = 'mx-1 mt-2'>
        <NavLink exact to ='/Services' className = 'default-style' activeClassName = 'active-style'style={{ textDecoration: 'none' }}>
           Services
        </NavLink>
    </li>
    <li className ='mx-1 mt-2'>
        <NavLink exact to ='/Contacts' className = 'default-style' activeClassName = 'active-style'style={{ textDecoration: 'none' }}>
            Contact
        </NavLink>
    </li>
</ul>
</nav>


<Route  path="/home" component={Home}/>
<Route  path="/Services/:id" component={Services}/>
<Route  path="/contacts" component={Contact}/>
<Route path ='/services' component={Sousservice}/>

</Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
