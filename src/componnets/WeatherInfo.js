import React from 'react';

function WeatherInfo({ weatherData }) {
  if (!weatherData) return null;

  return (
    <section className="weather-info">
      <div className="temperature">
        <p>
          <i className="iconfont icon-chuanyizhishidunhou"></i>
          Feel's like: <span id="feels-like-temperature">{Math.round(weatherData.main.feels_like - 273.15)}℃</span>
        </p>
      </div>
      <div className="others">
        <p>Humidity: <span id="humidity">{weatherData.main.humidity}%</span></p>
        <p>Pressure: <span id="pressure">{weatherData.main.pressure} hPa</span></p>
        <p>Visibility: <span id="visibility">{weatherData.visibility / 1000} km</span></p>
      </div>
    </section>
  );
}

export default WeatherInfo;
