import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/ROS-Project-Deep-Blue-Season-10">  {/* Set the basename */}
    <App />
  </Router>
);
