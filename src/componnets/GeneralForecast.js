import React from 'react';
import SlideShow from './SlideShow';

function GeneralForecast({ weatherData }) {
  if (!weatherData) return null;

  return (
    <section className="general-forecast">
      <SlideShow />
      <div className="sunrise-sunset">
        <ul className="grid-box">
          <li className="middle-1"></li>
          <li className="middle-1">
            <span id="min-temperature">8°</span> / <span id="max-temperature">14°</span>
          </li>
          <li className="middle-2">
            <span id="current-temperature">{Math.round(weatherData.main.temp - 273.15)}℃</span>
            <img id="weather-image" src="./images/cloud.svg" alt="" />
          </li>
          <li className="middle-3">
            <span id="weather-description">{weatherData.weather[0].description}</span>
          </li>
          <li className="middle-4">
            <div>
              <i className="iconfont icon-navigate"></i> S
            </div>
            <div>
              <i className="iconfont icon-fengsu"></i> <span id="wind-speed">{weatherData.wind.speed} km/h</span>
            </div>
            <div>
              <i className="iconfont icon-yusan"></i> <span id="humidity">{weatherData.main.humidity}%</span>
            </div>
          </li>
          <li className="middle-5">
            14:07
          </li>
          <li className="middle-6">
            24.05.2024 Thu.
          </li>
        </ul>
        <div className="icons-sun">
          <div className="sunrise">
            <i className="iconfont icon-richu"></i>
            <p id="sunrise-time">05:34</p>
          </div>
          <div className="sunset">
            <i className="iconfont icon-rila"></i>
            <p id="sunset-time">21:08</p>
          </div>
        </div>
        <div className="hide-bottom-half">
          <div className="position-aspect-ratio-1">
            <div className="half-circle-yellow hide-bottom-half pseudo"></div>
          </div>
        </div>
        <div className="hide-bottom-half">
          <div className="position-aspect-ratio-1 rotatable">
            <div className="moving-sun"></div>
            <div className="half-circle-white hide-bottom-half pseudo"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralForecast;
