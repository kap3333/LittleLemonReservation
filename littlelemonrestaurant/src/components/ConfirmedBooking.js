import React from 'react';
import '../App.css';

function ConfirmedBooking() {
    return (
        <div className='confirmation-container'>
            <h1>Booking Confirmed!</h1>
            <div>
                <p>Your reservation has been successfully confirmed!</p>
                <p>You will receive an email with a confrimation shortly.</p>
                <p>Thank you for choosing Little Lemon!</p>
            </div>
        </div>
    );
}

export default ConfirmedBooking;