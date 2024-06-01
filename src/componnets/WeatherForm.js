import React, { useState } from 'react';

function WeatherForm({ setCity, setCountry, setShowForm }) {
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setCountry(countryInput);
    setShowForm(false);
  };

  return (
    <form id="weather-form">
      <div className="input-container" data-placeholder="City:">
        <input type="text" id="city" value={cityInput} onChange={(e) => setCityInput(e.target.value)} required />
      </div>
      <div className="input-container" data-placeholder="Country:">
        <input type="text" id="country" value={countryInput} onChange={(e) => setCountryInput(e.target.value)} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>Get Weather</button>
        <button id="cancel-button" type="button" onClick={() => setShowForm(false)}>Cancel</button>
      </div>
    </form>
  );
}

export default WeatherForm;
