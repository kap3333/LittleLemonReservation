import React from 'react';
import Logo from '../assets/Logo.svg';
import '../App.css'; // Import the CSS file for styling


function Nav() {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
            <img src={Logo} alt="Little Lemon Logo" className='nav-logo' />
            </div>
            <ul className='nav-links'>
                <li className='nav-item'><a href="#home">Home</a></li>
                <li className='nav-item'><a href="#about">About</a></li>
                <li className='nav-item'><a href="#menu">Menu</a></li>
                <li className='nav-item'><a href="#Reservations">Reservations</a></li>
                <li className='nav-item'><a href="#OrderOnline">Order Online</a></li>
                <li className='nav-item'><a href="#Login">Login</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
// This is a simple navigation component for a restaurant website.
// It contains links to different sections of the website.
// The links are organized in an unordered list.