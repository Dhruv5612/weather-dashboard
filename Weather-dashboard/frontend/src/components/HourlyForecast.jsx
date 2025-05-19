import React from 'react';
import { formatDate } from '../utils/formatDate';
import '../styles/HourlyForecast.css';

const HourlyForecast = ({ hourlyData }) => {
  if (!hourlyData || hourlyData.length === 0) return null;

  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="hourly-container">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <p className="time">{formatDate(new Date(hour.dt * 1000), 'hour')}</p>
            <img src={hour.icon} alt={hour.description} className="weather-icon" />
            <p className="temperature">{hour.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast; 