import React, { useState } from 'react';
import WeatherPrompt from './WeatherPrompt';
import WeatherResult from './WeatherResult.jsx';
import Window from '../../Window.jsx';
import { GlobalContext } from '../../../App';
function WeatherApp(props) {
  const [state] = React.useContext(GlobalContext);
  const [submitted, setSubmitted] = useState(false);
  React.useEffect(() => {
    setTimeout(!state.Weather.appOpen && setSubmitted(false), 1000);
  }, [state.Weather.appOpen]);
  return (
    <div
      style={{ display: state.Weather.appOpen ? 'block' : 'none' }}
    >
      <Window windowTitle="Weather" case="Weather">
        {submitted ? (
          <WeatherResult />
        ) : (
          <WeatherPrompt setSubmitted={setSubmitted} />
        )}
      </Window>
    </div>
  );
}

export default WeatherApp;
