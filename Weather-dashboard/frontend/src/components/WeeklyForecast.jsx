import React from 'react';
import { formatDate } from '../utils/formatDate';
import '../styles/WeeklyForecast.css';

const WeeklyForecast = ({ dailyData }) => {
  if (!dailyData || dailyData.length === 0) return null;

  return (
    <div className="weekly-forecast">
      <h3>7-Day Forecast</h3>
      <div className="daily-container">
        {dailyData.map((day, index) => (
          <div key={index} className="daily-item">
            <p className="day">{formatDate(new Date(day.dt * 1000), 'weekday')}</p>
            <img src={day.icon} alt={day.description} className="weather-icon" />
            <div className="temperature-range">
              <span className="max">{day.maxTemp}°C</span>
              <span className="min">{day.minTemp}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast; 