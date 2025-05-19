import React from 'react';
import '../styles/ExtraInfoPanel.css';

const ExtraInfoPanel = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    pressure,
    visibility,
    sunrise,
    sunset,
    uvIndex,
    precipitation,
  } = weatherData;

  return (
    <div className="extra-info-panel">
      <div className="info-grid">
        <div className="info-item">
          <h4>Pressure</h4>
          <p>{pressure} hPa</p>
        </div>
        <div className="info-item">
          <h4>Visibility</h4>
          <p>{visibility} km</p>
        </div>
        <div className="info-item">
          <h4>UV Index</h4>
          <p>{uvIndex}</p>
        </div>
        <div className="info-item">
          <h4>Precipitation</h4>
          <p>{precipitation} mm</p>
        </div>
        <div className="info-item">
          <h4>Sunrise</h4>
          <p>{sunrise}</p>
        </div>
        <div className="info-item">
          <h4>Sunset</h4>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfoPanel; 