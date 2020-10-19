import React, { useState } from 'react';
import weatherIcon from '../../../media/weather-icon.png';
import WeatherPrompt from './weatherPrompt';
import WeatherResult from './weatherResult.jsx';
import Window from '../../Window.jsx';

function WeatherApp(props) {
  // Open & close promt window
  const [show, setShow] = useState('none');

  const handleClose = () => setShow('none');
  const handleShow = () => setShow('block');
  // Open & close weather result window
  const [showWeather, setShowWeather] = useState('none');

  const handleCloseWeather = () => setShowWeather('none');
  const handleShowWeather = () => setShowWeather('block');
  // Passing weather result to result window
  const [temp, setTemp] = useState();
  const tempResult = (tempToSet) => {
    setTemp(tempToSet);
  };
  // Passing city result to result window
  const [city, setCity] = useState();
  const cityResult = (cityToSet) => {
    setCity(cityToSet);
  };
  // Passing error message
  const [errorMessage, setErrorMessage] = useState();
  const passErrorMessage = (errorToSet) => {
    setErrorMessage(errorToSet);
  };
  // Open error window
  const [showWindow, setShowWindow] = useState('none');

  const handleCloseWindow = () => setShowWindow('none');
  const handleShowWindow = () => setShowWindow('block');

  return (
    <div>
      <div className="iconApp">
        <img
          onClick={handleShow}
          className="icon"
          src={weatherIcon}
          alt=""
        ></img>
        <span style={{ fontFamily: 'Pixelated MS Sans Serif' }}>
          Weather
        </span>
      </div>
      <div>
        <WeatherPrompt
          show={show}
          onHide={handleClose}
          onSubmit={handleClose}
          showWeather={handleShowWeather}
          tempResult={tempResult}
          errorMessage={passErrorMessage}
          showWindow={handleShowWindow}
          cityResult={cityResult}
        />
        <WeatherResult
          hideWeather={handleCloseWeather}
          showWeather={showWeather}
          temp={temp}
          city={city}
        />
        <Window
          showWindow={showWindow}
          onHideWindow={handleCloseWindow}
          errorMessage={errorMessage}
          windowTitle="Error"
        />
      </div>
    </div>
  );
}

export default WeatherApp;
