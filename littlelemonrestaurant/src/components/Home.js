import React from 'react';
import Hero from './Hero';
// import Highlights from '.Highlights';
// import Testimonials from '.Testimonials';
import About from './About';
import '../App.css'; // Import the CSS file for styling

function App() {
  return (
    <>
      <Hero />
      <About />
      {/* We'll add components back one by one after we get this working */}
      {/*
      <Highlights />
      <Testimonials />
      */}
  </>
  );
}

export default App;