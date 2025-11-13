import React, { useState } from 'react';
import './weather.css';

function Weather({ props, city, setCity }) {
  const [input, setInput] = useState(city);

  const handleSearch = () => {
    setCity(input);
  };

  return (
    <div id='weather-card'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter city name'
        id='city-input'
      />
      <button onClick={handleSearch} id='search-button'>Search</button>

      {props ? (
        <>
          <h1>City: {props.city}</h1>
          <h2>Temperature: {props.temp}°C</h2>
          <h2>Humidity: {props.humidity}%</h2>
        </>
      ) : (
        <h2>No data found for "{input}"</h2>
      )}
    </div>
  );
}

export default Weather;