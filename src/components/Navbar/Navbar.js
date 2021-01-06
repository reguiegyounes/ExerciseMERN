import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import {MenuItems} from './MenuItems'
import Button from '../Button/Button'
import './Navbar.css'

function Navbar(){
    const [clicked,setClicked]=useState(false);
    const handlsClick=()=>{
        setClicked(clicked?false:true)
    }
    return(
        <nav className="NavbarItems">
            <h1 > 
                <Link to="/" className="navbar-logo">ExerceTracker</Link>
            </h1>
            <div className="menu-icon" onClick={handlsClick}>
                <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map(
                        (item,index)=>{
                            return(
                                <li  key={index}>
                                    <Link className={item.cName} to={item.url}>{item.title}</Link>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            
        </nav>
    );
}


export default Navbar
