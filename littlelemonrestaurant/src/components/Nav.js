import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import '../App.css'; // Import the CSS file for styling


function Nav() {
    //state to track if mobile menu is open
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
            <div className='logo-container'>
                <img src={Logo} alt="Little Lemon Logo" className='nav-logo' />
            </div>

            {/*haburger menu*/}
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='hamburger-line'></div>
                <div className='hamburger-line'></div>
                <div className='hamburger-line'></div>
            </div>

                {/*regular navigation links hidden on mobile*/}
                <ul className='nav-links desktop-nav'>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'><Link to="/About">About</Link></li>
                    <li className='nav-item'><Link to="/Menu">Menu</Link></li>
                    <li className='nav-item'><Link to="/Reservations">Reservations</Link></li>
                    <li className='nav-item'><Link to="/OrderOnline">Order Online</Link></li>
                    <li className='nav-item'><Link to="/Login">Login</Link></li>
                </ul>

                <ul className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'><Link to="/About">About</Link></li>
                    <li className='nav-item'><Link to="/Menu">Menu</Link></li>
                    <li className='nav-item'><Link to="/Reservations">Reservations</Link></li>
                    <li className='nav-item'><Link to="/OrderOnline">Order Online</Link></li>
                    <li className='nav-item'><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
