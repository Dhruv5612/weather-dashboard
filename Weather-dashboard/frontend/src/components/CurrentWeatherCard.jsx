import React from 'react';
import { formatDate } from '../utils/formatDate';
import '../styles/CurrentWeatherCard.css';

const CurrentWeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    temperature,
    description,
    icon,
    city,
    country,
    feelsLike,
    humidity,
    windSpeed,
  } = weatherData;

  return (
    <div className="current-weather-card">
      <div className="location">
        <h2>{city}, {country}</h2>
        <p className="date">{formatDate(new Date())}</p>
      </div>
      
      <div className="weather-main">
        <img src={icon} alt={description} className="weather-icon" />
        <div className="temperature">
          <h1>{temperature}°C</h1>
          <p className="description">{description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail">
          <span>Feels Like</span>
          <span>{feelsLike}°C</span>
        </div>
        <div className="detail">
          <span>Humidity</span>
          <span>{humidity}%</span>
        </div>
        <div className="detail">
          <span>Wind</span>
          <span>{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard; 