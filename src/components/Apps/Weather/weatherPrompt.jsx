import React, { useState } from 'react';
import { GlobalContext } from '../../../App';
function WeatherPrompt(props) {
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
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default WeatherPrompt;
