import React from 'react';

function WeatherResult(props) {
  return (
    <div
      style={{
        borderStyle: 'solid',
        width: '300px',
        margin: 'auto',
        position: 'absolute',
        display: props.showWeather,
      }}
      className="modal-content"
    >
      <span onClick={props.hideWeather} id="close" className="close">
        &times;
      </span>
      <p>Temp is {props.temp}</p>
    </div>
  );
}

export default WeatherResult;
