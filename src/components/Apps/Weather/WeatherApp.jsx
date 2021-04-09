import React from 'react';
import WeatherPrompt from './WeatherPrompt';
import WeatherResult from './WeatherResult.jsx';
import Window from '../../Window.jsx';
import { GlobalContext } from '../../../App';
import weatherIcon from '../../../media/weather-icon.png';
export default function WeatherApp() {
  const [state] = React.useContext(GlobalContext);
  return (
    <>
      {state.Weather.submitted ? (
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
          <WeatherPrompt />
        </Window>
      )}
    </>
  );
}
