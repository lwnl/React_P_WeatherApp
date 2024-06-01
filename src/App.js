import React, { useState, useEffect } from 'react';
import './style.css';
import './font.css';  // Assuming the CSS for icon font is in font.css
import WeatherForm from './WeatherForm';
import GeneralForecast from './GeneralForecast';
import WeatherInfo from './WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Balingen');
  const [country, setCountry] = useState('Germany');
  const [showForm, setShowForm] = useState(false);

  const apiKey = '8ee0ee1386092cdc507a8269ed0e2b74';

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
    };
    fetchWeatherData();
  }, [city, country]);

  return (
    <div className="weather">
      <div className="background"></div>
      <header>
        <i className="iconfont icon-menu"></i>
        <div className="address">
          <p id="address">{city}, {country}</p>
        </div>
        <i className="iconfont icon-location hover-effect" onClick={() => setShowForm(true)}>
          <span>Add locations</span>
        </i>
      </header>
      {showForm && (
        <WeatherForm
          setCity={setCity}
          setCountry={setCountry}
          setShowForm={setShowForm}
        />
      )}
      <main>
        <GeneralForecast weatherData={weatherData} />
        <WeatherInfo weatherData={weatherData} />
        {/* Add other sections as necessary */}
      </main>
    </div>
  );
}

export default App;
