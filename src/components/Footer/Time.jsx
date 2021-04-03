import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  time: {
    marginRight: `0.7rem`,
    fontSize: `11px`,
    color: `white`,
    fontFamily: 'Arial',
    alignSelf: `center`,
  },
});
export default function Time() {
  const classes = useStyles();
  const [defaultTime, timeUpdate] = useState('00:00AM');
  function newTime() {
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    timeUpdate(time);
  }
  setInterval(newTime, 1000);
  return <div className={classes.time}>{defaultTime}</div>;
}
