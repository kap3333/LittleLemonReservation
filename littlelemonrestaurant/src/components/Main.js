import React, { useReducer} from 'react';
import { Navigate, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component
import '../App.css';

//Reducer function to manage state for available times
export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = action.payload; // The date selected by the user

            return window.fetchAPI(selectedDate);

         default:
            return state;
}
}

export const initializeTimes = () => {
    const today = new Date(); // Get today's date


    return window.fetchAPI(today)
};

function Main() {

    const navigate = useNavigate();

const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

    const updateTimes = (date) => {
        dispatch({
            type: 'UPDATE_TIMES',
            payload: date
        });
    }
    const submitForm = (formData) => {
        try {
          console.log("submitForm function started");
          console.log("formData received:", formData);
          
          // Check if window.submitAPI exists
          if (typeof window.submitAPI !== 'function') {
            console.error("window.submitAPI is not a function");
            return false;
          }
          
          const success = window.submitAPI(formData);
          console.log("window.submitAPI returned:", success);
          
          if (success) {
            console.log("Navigating to /ConfirmedBooking");
            navigate('/ConfirmedBooking');
          } else {
            console.log("Not navigating - success was false");
          }
          
          return success;
        } catch (error) {
          console.error("Error in submitForm function:", error);
          return false;
        }
      };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Menu" element={<Menu />} />
                <Route
                    path="/Reservations"
                    element={
                    <BookingPage
                        availableTimes={availableTimes}
                        updateTimes={updateTimes}
                        submitForm={submitForm}
                    />
                    }
                    />
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
                <Route path="/OrderOnline" element={<OrderOnline />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;