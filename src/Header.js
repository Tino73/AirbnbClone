import React from 'react'
import logo from './airbnblogo.png';
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img className="header__icon" src={logo}></img>
    </div>
    )
}

export default Header
