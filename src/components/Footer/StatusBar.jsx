import React from 'react';
import { createUseStyles } from 'react-jss';
import { GlobalContext } from '../../App';
import assets from './assets';
const useStyles = createUseStyles({
  statusWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    userSelect: 'none',
  },
  statusApp: {
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    backgroundColor: `rgb(60, 129, 243)`,
    boxShadow: `rgb(0 0 0 / 30%) -1px 0px inset, rgb(255 255 255 / 20%) 1px 1px 1px inset`,
    maxWidth: `150px`,
    width: '120px',
    color: `rgb(255, 255, 255)`,
    borderRadius: `2px`,
    marginTop: `2px`,
    padding: `0px 15px`,
    fontSize: '11px',
    '& img': {
      marginRight: '6px',
    },
    '& span': {
      paddingRight: '25px',
    },
    '&:hover': {
      backgroundColor: `rgb(83, 163, 255)`,
      boxShadow: `rgb(0 0 0 / 20%) 1px 0px 1px, rgb(255 255 255 / 30%) 1px 1px 1px inset`,
    },
  },
  statusAppFocus: {
    backgroundColor: `rgb(30, 82, 183)`,
    boxShadow: `rgb(0 0 0 / 20%) 0px 0px 1px 1px inset, rgb(0 0 0 / 70%) 1px 0px 1px inset`,
    '&:hover': {
      backgroundColor: `rgb(97 151 255);`,
      boxShadow: `rgb(0 0 0 / 20%) 0px 0px 1px 1px inset, rgb(0 0 0 / 70%) 1px 0px 1px inset`,
    },
  },
});
export default function StatusBar() {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const setActive = (app) => {
    dispatch({ type: 'ActiveApp', payload: app });
  };
  const mapStatus = state.StatusBar.map((app, index) => {
    const src = assets && app;
    return (
      <div
        onClick={() => setActive(app)}
        className={`${classes.statusApp} ${
          state.ActiveApp === app && classes.statusAppFocus
        }`}
        key={index}
      >
        <img
          src={assets?.[src]}
          alt="icon"
          width="15px"
          height="15px"
        />
        <span>{app}</span>
      </div>
    );
  });
  return <div className={classes.statusWrapper}>{mapStatus}</div>;
}
