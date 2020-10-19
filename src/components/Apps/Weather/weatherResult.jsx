import React from 'react';

function WeatherResult(props) {
  return (
    <div
      style={{
        display: props.showWeather,
      }}
      className="window"
    >
      <div class="title-bar">
        <div class="title-bar-text">Weather App</div>
        <div class="title-bar-controls">
          <button
            onClick={props.hideWeather}
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div className="window-body">
        <h3>
          Temperature in {props.city} is {props.temp} °C
        </h3>
      </div>
    </div>
  );
}

export default WeatherResult;
