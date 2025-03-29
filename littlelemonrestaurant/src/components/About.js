import React from 'react';
import '../App.css';
import marioAndAdrianA from '../assets/Mario and Adrian A.jpg';
import marioAndAdrianB from '../assets/Mario and Adrian b.jpg';

function About() {
    return (
        <section className="about-container">
                <div className='about-text'>
                    <h1 className='about-heading1'>Little Lemon</h1>
                    <h2 className='about-heading2'>Chicago</h2>
                    <p>Little Lemon is a family-owned restaurant located in the heart of Chicago. We specialize in authentic Mediterranian cuisine,
                        and we are proud to serve our customers with the best quality food and service. Our menu features a variety of dishes, including authentic greek salad,
                        brushetta, lemon cake, and more. We use fresh, locally sourced ingredients to create delicious and flavorful meals that are sure to satisfy your cravings. 
                        Whether you're looking for a quick bite to eat or a sit-down meal with friends and family, Little Lemon has something for everyone. Come visit us today and experience the taste of Greece right here in Chicago!</p>
                </div>

            <div className='about-images'>
                <img src={marioAndAdrianB} alt='Mario and Adrian A' className='about-image-back' />
                <img src={marioAndAdrianA} alt='Mario and Adrian B' className='about-image-front' />
            </div>
        </section>
    )
}

export default About;