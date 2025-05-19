import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading weather data...</p>
      </div>
    </div>
  );
};

export default Loader; 