import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.fetchAPI = function(date) {
  console.log("fetchAPI called with date:", date);
  return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
};

window.submitAPI = function(formData) {
  console.log("===== SUBMIT API CALLED =====");
  console.log("Form data received:", formData);
  // Return true explicitly
  const result = true;
  console.log("Submit API returning:", result);
  return result;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
