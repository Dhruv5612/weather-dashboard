import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import HourlyForecast from '../components/HourlyForecast';
import WeeklyForecast from '../components/WeeklyForecast';
import ExtraInfoPanel from '../components/ExtraInfoPanel';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { useWeatherData } from '../hooks/useWeatherData';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { weatherData, hourlyData, dailyData, loading, error } = useWeatherData(searchQuery);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main className="dashboard-content">
        {weatherData && (
          <>
            <CurrentWeatherCard weatherData={weatherData} />
            <HourlyForecast hourlyData={hourlyData} />
            <WeeklyForecast dailyData={dailyData} />
            <ExtraInfoPanel weatherData={weatherData} />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard; 