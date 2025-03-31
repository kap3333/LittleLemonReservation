import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import '../App.css'; 

const defaultTimes = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00'
];

function BookingForm(props) {
    const navigate = useNavigate(); // Add this line
    const availableTimes = props.availableTimes || defaultTimes; // Use the passed available times or default to the predefined times
    const updateTimes = props.updateTimes || function() {};
    const submitForm = props.submitForm || function() {return false; };

    // Form state
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    // Validation state
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [guestError, setGuestError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // Get today's date in YYYY-MM-DD format for min attribute
    const getTodayString = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const valid =
        // Check if the date is in the future
        date &&
        time &&
        guests &&
        !dateError &&
        !timeError &&
        !guestError;

        setIsFormValid(valid);
    }, [date, time, guests, dateError, timeError, guestError]);

    const validateDate = (selectedDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to start of the day for comparison

        const inputDate = new Date(selectedDate);
        inputDate.setHours(0, 0, 0, 0); // Set to start of the day for comparison

        if (inputDate < today) {
            setDateError('Selected date is in the past. Please choose a future date.');
            return false; // Invalid date
        } else {
            setDateError(''); // Clear error message
            return true; // Valid date
        }
    };

    const validateGuest = (count) => {
        const guestCount = parseInt(count, 10); // Convert to integer
        if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
            setGuestError('Number of guests must be between 1 and 10.');
            return false; // Invalid guest count
        } else {
            setGuestError(''); // Clear error message
            return true; // Valid guest count
        }
    };

    const validateTime = (selectedTime) => {
        if (!selectedTime) {
            setTimeError('Please select a reservation time');
            return false; // Invalid time
        } else {
            setTimeError(''); // Clear error message
            return true; // Valid time
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value; // Get the selected date from the event
        setDate(selectedDate); // Update the state with the selected date
        validateDate(selectedDate);
        updateTimes(selectedDate); // Validate the selected date
    };
    
    const handleTimeChange = (e) => {
        const selectedTime = e.target.value; // Get the selected time from the event
        setTime(selectedTime); // Update the state with the selected time
        validateTime(selectedTime); // Validate the selected time
    };
    
    const handleGuestsChange = (e) => {
        const guestCount = e.target.value; // Get the number of guests from the event
        setGuests(guestCount); // Update the state with the number of guests
        validateGuest(guestCount); // Validate the number of guests
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Validate all fields before submission
        const isDateValid = validateDate(date);
        const isTimeValid = validateTime(time);
        const isGuestValid = validateGuest(guests);
        
        // Prevent submission if any validation fails
        if (!isDateValid || !isTimeValid || !isGuestValid) {
            if (!isDateValid) document.getElementById('res-date').focus();
            else if (!isTimeValid) document.getElementById('res-time').focus();
            else if (!isGuestValid) document.getElementById('guests').focus();
            return;
        }

        const formData = {
            date,
            time,
            guests: parseInt(guests),
            occasion
        };

        console.log('About to call submitForm with:', formData);
        console.log('submitForm type:', typeof submitForm); // Check if it's a function
        
        try {
            // Try to call the submitForm function
            const success = submitForm(formData);
            console.log('submitForm returned:', success);
            
            if (success) {
                console.log("Form submitted successfully, navigating...");
                navigate('/ConfirmedBooking');
            } else {
                console.log("submitForm returned false, trying direct navigation...");
                // Direct navigation as fallback
                navigate('/ConfirmedBooking');
            }
        } catch (error) {
            console.error("Error in submitForm:", error);
            console.log("Error occurred, using direct navigation...");
            // Navigate even if there's an error
            navigate('/ConfirmedBooking');
        }
        
        console.log('Form submitted:', formData);
    };

    return (
        <form className='booking-form' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='res-date'>Choose Date:</label>
                <input
                    type='date'
                    id='res-date'
                    value={date}
                    onChange={handleDateChange} // Call the handleDateChange function to update the state and validate
                    min={getTodayString()}
                    required
                    aria-required='true' // Indicate that this field is required
                    aria-invalid={!!dateError} // Set aria-invalid based on the dateError state
                />
                {dateError && <div className='error-message'>{dateError}</div>} {/* Display error message if date is invalid */}
            </div>

            <div className="form-group">
                <label htmlFor='res-time'>Choose Time:</label>
                <select
                    id='res-time'
                    value={time}
                    onChange={handleTimeChange}
                    required
                    aria-required='true'
                    aria-invalid={!!timeError}
                >
                    <option value="">Select a Time</option>
                    {availableTimes.map(availableTime => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
                {timeError && <div className='error-message'>{timeError}</div>}
            </div>

            <div className="form-group">
                <label htmlFor='guests'>Number of Guests:</label>
                <input
                    type='number'
                    id='guests'
                    min='1'
                    max='10'
                    value={guests}
                    onChange={handleGuestsChange}
                    required
                    aria-required='true'
                    aria-invalid={!!guestError}
                />
                {guestError && <div className='error-message'>{guestError}</div>}
            </div>

            <div className="form-group">
                <label htmlFor='occasion'>Occasion:</label>
                <select
                    id='occasion'
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Graduation</option>
                    <option>Other</option>
                </select>
            </div>

            <button 
                type="submit" 
                className='submit-btn'
                disabled={!isFormValid}
                aria-label='On Click'
                aria-disabled={!isFormValid} // Disable the button if the form is not valid
            >
                Make Reservation
            </button>
        </form>
    );
}

export default BookingForm;