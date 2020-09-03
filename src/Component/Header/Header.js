import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <img src={logo} alt=""/>
        <nav>
            <a href="./About">About</a>
            <a href="./Courses"> My Courses</a>
            
        </nav>
        
    </div>
    );
};

export default Header;