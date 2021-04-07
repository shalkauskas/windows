import React from 'react';
import Window from './Window.jsx';
import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';
const useStyles = createUseStyles({
  pre: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    padding: '12px',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'pre-line',
    '& textarea': {
      resize: 'none',
      width: 'inherit',
      height: 'inherit',
      backgroundColor: 'black',
      color: 'silver',
      fontFamily: `inherit`,
      fontSize: '1rem',
      paddingLeft: 0,
    },
  },
});
export default function CommandLine() {
  const classes = useStyles();

  return (
    <Window
      windowTitle="Command Prompt"
      case="CommandLine"
      width={`400px`}
      height={`300px`}
      margin={`0 -5px -8px 0`}
      noDropdown
    >
      <pre className={classes.pre}>
        Microsoft&#10094;R&#10095; Windows DOS &#10094;C&#10095;
        Copyright Microsoft Corp 1990-2001.
        <br />
        C:&#92;WINDOWS&#92;SYSTEM32{`>`}
        <textarea spellCheck={false} />
      </pre>
    </Window>
  );
}
