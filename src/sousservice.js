import React, { Component } from 'react';

import {Route ,Link, NavLink,BrowserRouter as Router} from 'react-router-dom'


class Sousservice extends Component {

    render() {
        return (
            <div className ='for'>
                <ul >
                    <li >
                        <Link to = '/Services/ForEntrepreneur' className = 'default-style' activeClassName = 'active-style' style={{ textDecoration: 'none' }}>
                            For Entrepreneurs
                        </Link> 
                    </li>
                    <li className =''>
                        <Link to = '/Services/ForStudent' className = 'default-style' activeClassName = 'active-style' style={{ textDecoration: 'none' }}>
                            For Students
                        </Link> 
                    </li>
                    <li >
                        <Link to = '/Services/ForHobbysits' className = 'default-style' activeClassName = 'active-style' style={{ textDecoration: 'none' }}>
                            For Hobbysits
                        </Link> 
                    </li>
                </ul>
            </div>
            
            
        );
    }
}

export default Sousservice;