import React from 'react';
import { GlobalContext } from '../App';
import Draggable from 'react-draggable';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  icon: {
    width: `64px`,
  },
  iconApp: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    width: ` 80px`,
    margin: `8px`,
    padding: `4px`,
    fontSize: `12px`,
    fontFamily: `sans-serif bold`,
    '-webkitFontSmoothing': `none`,
    color: `rgb(255, 255, 255)`,
    textAlign: `center`,
  },
  iconText: {
    padding: '2px 4px',
    textShadow: `black 0px 1px 1px`,
    fontFamily: 'Pixelated MS Sans Serif',
  },
});
export default function AppItem(props) {
  const classes = useStyles();
  const [, dispatch] = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(false);
  const handleOpen = () => {
    dispatch({ type: props.case, payload: true });
  };
  return (
    <Draggable bounds={`body`} onStart={() => setActive(!active)}>
      <div
        className={classes.iconApp}
        onClick={() => setActive(!active)}
        onDoubleClick={handleOpen}
        style={{ filter: active ? 'drop-shadow(blue 0px 0px)' : '' }}
      >
        <img
          className={classes.icon}
          src={props.icon}
          alt="Icon"
          draggable="false"
          style={{ opacity: active ? 0.5 : 1 }}
        />
        <span
          className={classes.iconText}
          style={{
            backgroundColor: active ? 'blue' : '',
          }}
        >
          {props.name}
        </span>
      </div>
    </Draggable>
  );
}
