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
    <Window
      windowTitle="Weather"
      case="Weather"
      open={state.Weather.appOpen}
      width={`400px`}
      height={`400px`}
    >
      {submitted ? (
        <WeatherResult />
      ) : (
        <WeatherPrompt setSubmitted={setSubmitted} />
      )}
    </Window>
  );
}

export default WeatherApp;
