import React from 'react';
import Window from '../Window.jsx';
import notepad from '../../media/notepad.png';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    fontFamily: `"Lucida Console", monospace`,
    fontSize: '12px',
  },
});
export default function Notepad() {
  const classes = useStyles();
  return (
    <Window
      windowTitle="Notepad"
      icon={notepad}
      app="Notepad"
      margin={3}
    >
      <textarea
        spellCheck={false}
        className={classes.textarea}
      ></textarea>
    </Window>
  );
}
