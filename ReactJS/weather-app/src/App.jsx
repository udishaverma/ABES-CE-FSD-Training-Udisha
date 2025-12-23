import React, { useEffect, useState } from 'react';

import Weather from './components/weather';

function App() {
  const [city, setCity] = useState('Delhi');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '<Your_API_Key>';

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          const formatted = {
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity
          };
          setWeatherData(formatted);
        } else {
          setWeatherData(null);
        }
      })
      .catch(err => console.error('Error fetching weather:', err));
  }, [city]); 

  return (
    <div>
      <Weather
        props={weatherData}
        city={city}
        setCity={setCity}
      />
    </div>
  );
}

export default App;