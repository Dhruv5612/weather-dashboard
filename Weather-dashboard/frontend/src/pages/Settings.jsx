import React, { useState, useEffect } from 'react';
import '../styles/Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    temperatureUnit: 'celsius',
    windSpeedUnit: 'kmh',
    timeFormat: '24h',
    defaultLocation: '',
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('weatherSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSettingChange = (setting, value) => {
    const newSettings = { ...settings, [setting]: value };
    setSettings(newSettings);
    localStorage.setItem('weatherSettings', JSON.stringify(newSettings));
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      
      <form className="settings-form">
        <div className="settings-section">
          <h2>Units</h2>
          <div className="form-group">
            <label>Temperature Unit</label>
            <select
              value={settings.temperatureUnit}
              onChange={(e) => handleSettingChange('temperatureUnit', e.target.value)}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Wind Speed Unit</label>
            <select
              value={settings.windSpeedUnit}
              onChange={(e) => handleSettingChange('windSpeedUnit', e.target.value)}
            >
              <option value="kmh">Kilometers per hour (km/h)</option>
              <option value="mph">Miles per hour (mph)</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Time Format</h2>
          <div className="form-group">
            <label>Time Display</label>
            <select
              value={settings.timeFormat}
              onChange={(e) => handleSettingChange('timeFormat', e.target.value)}
            >
              <option value="24h">24-hour</option>
              <option value="12h">12-hour</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Default Location</h2>
          <div className="form-group">
            <label>Default City</label>
            <input
              type="text"
              value={settings.defaultLocation}
              onChange={(e) => handleSettingChange('defaultLocation', e.target.value)}
              placeholder="Enter city name"
            />
          </div>
        </div>

        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings; 