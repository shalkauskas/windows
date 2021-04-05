import React, { useState } from 'react';
import { GlobalContext } from '../../../App';
import { createUseStyles } from 'react-jss';
import weather from '../../../media/weather-icon.png';
const useStyles = createUseStyles({
  promptHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    position: 'relative',
    '& img': {
      // position: `absolute`,
      marginRight: `10px`,
      left: 0,
    },
  },
  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '75%',
  },
  input: {
    width: '200px',
    marginBottom: '1rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
  button: {
    margin: '0.5rem',
  },
});
export default function WeatherPrompt(props) {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('imperial');
  const [, dispatch] = React.useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=${units}`;
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
            payload: { result: response, units: units },
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
              width="30px"
              height="30px"
            />
            <p>Enter your city and select desired unit system</p>
          </div>

          <label htmlFor="city" style={{ marginRight: '10px' }}>
            City:
          </label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Boston"
            onChange={handleChange}
            className={classes.input}
            required
          />
          <fieldset className={classes.fieldset}>
            <div className="field-row">Unit system:</div>
            <div
              className="field-row"
              onClick={() => setUnits('imperial')}
            >
              <input
                id="fahrenheit"
                type="radio"
                name="units"
                value={units}
                defaultChecked
              />
              <label
                style={{ boxSizing: 'initial' }}
                htmlFor="fahrenheit"
              >
                Fahrenheit
              </label>
            </div>
            <div
              className="field-row"
              onClick={() => setUnits('metric')}
            >
              <input
                id="celcius"
                type="radio"
                name="units"
                value={units}
              />
              <label
                style={{ boxSizing: 'initial' }}
                htmlFor="celcius"
              >
                Celcius
              </label>
            </div>
          </fieldset>

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
