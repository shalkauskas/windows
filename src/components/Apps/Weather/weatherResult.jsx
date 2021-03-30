import React from 'react';
import { GlobalContext } from '../../../App';
function WeatherResult(props) {
  const [state] = React.useContext(GlobalContext);
  const weather = state.Weather.result;
  const time = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'long',
    day: 'numeric',
  });

  const tempConvert = (temp) => {
    return Math.floor(temp - 273.15);
  };
  return (
    <div className="window-body">
      {state.Weather.error.length > 1 ? (
        <h3>{state.Weather.error}</h3>
      ) : (
        <div>
          <span>{time}</span>
          <h4>Temperature in</h4>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <img
              alt="Weather icon"
              width="90px"
              height="90px"
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            />
            <h3>{tempConvert(weather.main.temp)} °C</h3>
          </div>
          <div style={{ textAlign: 'left' }}>
            <b>
              Feels like {tempConvert(weather.main.feels_like)}°C.
              <br />
              {weather.weather[0].description
                .charAt(0)
                .toUpperCase() +
                weather.weather[0].description.slice(1)}
              .
              <br />
              Humidity {weather.main.humidity}%
            </b>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherResult;
