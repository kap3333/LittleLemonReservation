import React from 'react';
import '../App.css';
import restaurantFood from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='hero-container'>
        <div className='hero-content'>
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/Reservations">
            <button className='hero-button'>Reserve a Table</button>
            </Link>
        </div>
        <div className='hero-image'>
            <img src={restaurantFood} alt='Restaurant Food' className='hero-image-img' />
        </div>
        </div>
        </section>
    );
}
export default Hero;
// This is a simple Hero component for a restaurant website.