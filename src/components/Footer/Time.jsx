import React, { useState } from 'react';
import './Time.css';

function Time() {
  const [defaultTime, timeUpdate] = useState('Time');
  function newTime() {
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    timeUpdate(time);
  }
  setInterval(newTime, 1000);
  return <p className="time">{defaultTime}</p>;
}

export default Time;
