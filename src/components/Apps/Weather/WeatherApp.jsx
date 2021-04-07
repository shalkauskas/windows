import React, { useState } from 'react';
import WeatherPrompt from './WeatherPrompt';
import WeatherResult from './WeatherResult.jsx';
import Window from '../../Window.jsx';
import { GlobalContext } from '../../../App';
import weatherIcon from '../../../media/weather-icon.png';
export default function WeatherApp() {
  const [state] = React.useContext(GlobalContext);
  const [submitted, setSubmitted] = useState(false);
  React.useEffect(() => {
    setTimeout(!state.Weather.appOpen && setSubmitted(false), 1000);
  }, [state.Weather.appOpen]);
  return (
    <>
      {submitted ? (
        <WeatherResult />
      ) : (
        <Window
          windowTitle="Weather"
          icon={weatherIcon}
          case="Weather"
          width={`400px`}
          height={`300px`}
          noDropdown
        >
          <WeatherPrompt setSubmitted={setSubmitted} />
        </Window>
      )}
    </>
  );
}
