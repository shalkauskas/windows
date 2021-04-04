import React, { useState } from 'react';
import { GlobalContext } from '../../../App';
import { createUseStyles } from 'react-jss';
import weather from '../../../media/weather-icon.png';
const useStyles = createUseStyles({
  promptHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    position: 'relative',
    '& img': {
      position: `absolute`,
      left: 0,
    },
  },
  input: {
    width: '200px',
    marginBottom: '1rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  button: {
    margin: '0.5rem',
  },
});
export default function WeatherPrompt(props) {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [, dispatch] = React.useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
    setCity('');
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.cod === 200) {
          dispatch({
            type: 'WeatherResult',
            payload: { result: response },
          });
        } else {
          dispatch({
            type: 'WeatherResult',
            payload: { error: response.message },
          });
        }
        props.setSubmitted(true);
      });
  };
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div className="window-body">
        <form onSubmit={handleSubmit}>
          <div className={classes.promptHeader}>
            <img
              src={weather}
              alt="weather icon"
              width="50px"
              height="50px"
            />
            <p>Enter your city and select desired unit system</p>
          </div>
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={handleChange}
            className={classes.input}
          />
          <div className={classes.buttons}>
            <button className={classes.button} type="submit">
              Ok
            </button>
            <button className={classes.button} type="submit">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
