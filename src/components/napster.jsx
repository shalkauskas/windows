import React, { useState } from 'react';
import napster from '../media/napster-icon.png';
import WeatherPrompt from './weatherPrompt';
import WeatherResult from './weatherResult.jsx';
import ErrorWindow from './errorWindow.jsx';

function NapsterApp(props) {
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
  // Passing error message
  const [errorMessage, setErrorMessage] = useState();
  const passErrorMessage = (errorToSet) => {
    setErrorMessage(errorToSet);
  };
  // Open error window
  const [showError, setShowError] = useState('none');

  const handleCloseError = () => setShowError('none');
  const handleShowError = () => setShowError('block');

  return (
    <div>
      <img
        onClick={handleShow}
        className="napster"
        id="napster"
        src={napster}
        alt=""
      ></img>
      <WeatherPrompt
        show={show}
        onHide={handleClose}
        onSubmit={handleClose}
        showWeather={handleShowWeather}
        tempResult={tempResult}
        errorMessage={passErrorMessage}
        showError={handleShowError}
      />
      <WeatherResult
        hideWeather={handleCloseWeather}
        showWeather={showWeather}
        temp={temp}
      />
      <ErrorWindow
        showError={showError}
        onHideError={handleCloseError}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default NapsterApp;
