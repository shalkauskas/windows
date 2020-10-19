import React, { useState } from 'react';

function WeatherPrompt(props) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = 'ede7670e8ec9da1d4576253840298116';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
    setCity('');
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.cod === 200) {
          const resultTemp = Math.floor(response.main.temp - 273.15);
          props.onHide();
          props.showWeather();
          props.tempResult(resultTemp);
          props.cityResult(city);
          setCity('');
        } else {
          props.onHide();
          props.showError();
          props.errorMessage(response.message);
        }
      });
  };
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div
      style={{
        display: props.show,
        width: '30vh',
        height: '10vh',
      }}
      className="window"
    >
      <div class="title-bar">
        <div class="title-bar-text">Weather App</div>
        <div class="title-bar-controls">
          <button onClick={props.onHide} aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default WeatherPrompt;
