import React from 'react';
import BookingForm from './BookingForm';
import '../App.css';

function BookingPage({availableTimes, updateTimes, submitForm}) {
    return (
        <div className='booking-page'>
            <div className='booking-header'>
            <h1>Book a Table</h1>
            <p>Fill in the form below to book your table at Little Lemon Restaurant.</p>
        </div>
        <div>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
            />
        </div>

        <div className='booking-info'>
            <h2>Reservation exceptions</h2>
            <p>Please note that we do not accept reservations for more than 10 guests online, please call (123)456-7890.</p>
            <p>Our regular hours are from 5 to 9pm, tuesday through sunday.</p>
        </div>
    </div>
    );
};

export default BookingPage;