import React, { useState } from 'react';
// import WeatherResult from "./weatherResult.jsx"

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
        borderStyle: 'solid',
        width: '200px',
        margin: 'auto',
        position: 'absolute',
        display: props.show,
      }}
      className="modal-content"
    >
      <span onClick={props.onHide} id="close" className="close">
        &times;
      </span>

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
  );
}

export default WeatherPrompt;
