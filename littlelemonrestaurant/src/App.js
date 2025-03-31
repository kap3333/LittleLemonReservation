import React from 'react';
// Comment out all component imports for now
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
//import Menu from './components/Menu';
import Reservations from './components/BookingPage';
//import OrderOnline from './components/OrderOnline';
//import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Reservations' element={<Reservations />} />
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
        {/*}
        <Route path='/Menu' element={<Menu />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/Login' element={<Login />} />
        */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;