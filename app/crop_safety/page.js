"use client";
import { useState } from 'react';
import React from 'react';

const CropSafety = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    // Mock API call, replace with actual API call
    const data = {
      location: 'Sample City',
      temp: 25,
      description: 'Sunny',
      humidity: 60,
      windSpeed: 10,
    };
    setWeatherData(data);
  };

  return (
    <div>
      <div className="weather-widget bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="weather-header mb-4">
          <h2 className="text-lg font-semibold mb-2">Weather's Forecast</h2>
          <form onSubmit={fetchWeather} className="flex">
            <input
              type="text"
              id="city-input"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-3 py-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              id="fetch-weather-btn"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get Weather
            </button>
          </form>
        </div>
        <div className="weather-info">
          {weatherData ? (
            <>
              <p className="weather-location text-lg font-semibold mb-2" id="weather-location">
                {weatherData.location}
              </p>
              <p className="weather-temp text-gray-700 mb-2" id="weather-temp">
                Temperature: {weatherData.temp}°C
              </p>
              <p className="weather-desc text-gray-700 mb-2" id="weather-desc">
                Description: {weatherData.description}
              </p>
              <p className="weather-humidity text-gray-700 mb-2" id="weather-humidity">
                Humidity: {weatherData.humidity}%
              </p>
              <p className="weather-wind text-gray-700 mb-2" id="weather-wind">
                Wind Speed: {weatherData.windSpeed} km/h
              </p>
            </>
          ) : (
            <p className="text-gray-700">No weather data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropSafety;
