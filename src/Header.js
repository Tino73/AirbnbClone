import React from 'react'
import logo from './airbnblogo.png';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
function Header() {
    return (
        <div className='header'>
            <img className="header__icon" src={logo} height="120" width="120"></img>
    
        <div className='header__center'>
            <input type='text'/>
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>

    </div>
    )
}

export default Header
