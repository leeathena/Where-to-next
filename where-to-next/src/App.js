// App.js
import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './SearchBar.js';
import WeatherExchangeBoxes from './WeatherExchangeBoxes.js';
import CityButtons from './CityButtons.js';

function App() {
  const [cityWeather, setCityWeather] = useState({});
  const [exchangeRate, setExchangeRate] = useState({});
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityButtonClick = async (city) => {
    // Fetch weather data and exchange rate data for the selected city
    const weatherData = await fetchWeatherData(city);
    const exchangeRateData = await fetchExchangeRateData(city);

    setCityWeather(weatherData);
    setExchangeRate(exchangeRateData);
    setSelectedCity(city);
  };

  const fetchWeatherData = async (city) => {
    // Mock function to fetch weather data from an API
    // Replace this with actual API call
    return { temperature: '25°C', humidity: '60%', conditions: 'Sunny' };
  };

  const fetchExchangeRateData = async (city) => {
    // Mock function to fetch exchange rate data from an API
    // Replace this with actual API call
    return { currency: 'USD', rate: '1.15' };
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <div className="container">
        <SearchBar />
        <CityButtons onCityButtonClick={handleCityButtonClick} />
        <WeatherExchangeBoxes cityWeather={cityWeather} exchangeRate={exchangeRate} selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default App;

