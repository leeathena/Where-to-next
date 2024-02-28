// components/WeatherExchangeBoxes.js
import React from 'react';

const WeatherExchangeBoxes = ({ cityWeather, exchangeRate, selectedCity }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="weather-box">
                    <h3>Weather Statistics for {selectedCity}</h3>
                    <p>Temperature: {cityWeather.temperature}</p>
                    <p>Humidity: {cityWeather.humidity}</p>
                    <p>Conditions: {cityWeather.conditions}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="exchange-box">
                    <h3>Exchange Rate for {selectedCity}</h3>
                    <p>1 EUR = {exchangeRate.rate} {exchangeRate.currency}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherExchangeBoxes;