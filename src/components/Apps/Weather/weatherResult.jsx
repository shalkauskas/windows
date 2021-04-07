import React from 'react';
import { GlobalContext } from '../../../App';
import { createUseStyles } from 'react-jss';
import { Rnd } from 'react-rnd';
const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Times New Roman',
    fontSize: '14px',
    background: `linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%)`,
    color: 'white',
    padding: '1rem',
    border: '0',
    marginBottom: [0, `!important`],
    borderRadius: 10,
    height: `inherit`,
    opacity: 0.85,
    backdropFilter: `blur(5px)`,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  weatherHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.5,
    },
  },
});
function WeatherResult(props) {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const weather = state.Weather.result;
  const time = new Date(new Date().getTime()).toLocaleTimeString(
    'en-US',
    {
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    },
  );
  const units = state.Weather.units === `imperial` ? '°F' : '°C';
  const speed = state.Weather.units === `imperial` ? 'mph' : 'kmph';
  const handleClose = () => {
    dispatch({ type: `Weather`, payload: false });
  };
  return (
    <>
      <Rnd
        bounds={'body'}
        enableResizing={false}
        default={{
          x: 100,
          y: 100,
          width: `400px`,
          height: `200px`,
        }}
      >
        <div className={classes.wrapper}>
          <span className={classes.closeButton} onClick={handleClose}>
            &#x2715;
          </span>
          <div className={classes.main}>
            <div
              className={classes.main}
              style={{ flexDirection: 'column' }}
            >
              <span>{time}</span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h4>
                  {weather.name}, {weather.sys.country}
                </h4>
                <img
                  alt="Weather icon"
                  width="90px"
                  height="90px"
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                />
              </div>
            </div>
            <div className={classes.weatherHeader}>
              <div>
                <h3>
                  {Math.round(weather.main.temp)} {units}
                </h3>
                {weather.weather[0].description
                  .charAt(0)
                  .toUpperCase() +
                  weather.weather[0].description.slice(1)}
                .
              </div>
            </div>
          </div>

          <div className={classes.info}>
            <b>Feels like: </b>
            {Math.round(weather.main.feels_like)}
            {units}.<b> Humidity: </b> {weather.main.humidity}%
            <b> Wind: </b>
            {Math.round(weather.wind.speed)} {speed}
          </div>
        </div>
      </Rnd>
    </>
  );
}

export default WeatherResult;
