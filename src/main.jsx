import React from 'react';  // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your App component
import "./index.css"
// Create a root and render the App component wrapped in BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
