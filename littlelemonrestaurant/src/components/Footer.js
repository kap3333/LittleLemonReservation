import React from 'react';

function Footer () {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <p>&copy; 2023 Little Lemon. All rights reserved.</p>
                <ul className='footer-links'>
                    <li className='nav-item'><a href="/Home">Home</a></li>
                    <li className='nav-item'><a href="/About">About</a></li>
                    <li className='nav-item'><a href="/Menu">Menu</a></li>
                    <li className='nav-item'><a href="/Reservations">Reservations</a></li>
                    <li className='nav-item'><a href="/OrderOnline">Order Online</a></li>
                    <li className='nav-item'><a href="/Login">Login</a></li>
                </ul>
                <ul className='footer-links'>
                    <li className='nav-item'><a href="#terms">Terms of Service</a></li>
                    <li className='nav-item'><a href="#privacy">Privacy Policy</a></li>
                    <li className='nav-item'><a href="#contact">Contact Us</a></li>
                </ul>
                <ul className='footer-links'>
                    <li className='nav-item'><a href="#facebook">Facebook</a></li>
                    <li className='nav-item'><a href="#instagram">Instagram</a></li>
                    <li className='nav-item'><a href="#twitter">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;