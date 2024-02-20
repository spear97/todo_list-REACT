import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import CSS file for styling
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import the function to report web vitals

// Create a root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React StrictMode for additional checks and warnings in development mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in the application by passing a function to log results
// For example, you can log results to the console or send them to an analytics endpoint
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
