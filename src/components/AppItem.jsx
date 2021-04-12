import React from 'react';
import { GlobalContext } from '../App';
import Draggable from 'react-draggable';
import { createUseStyles } from 'react-jss';

export default function AppItem(props) {
  const { app, icon, name, inside, link } = props;
  const useStyles = createUseStyles({
    icon: {
      width: `64px`,
    },
    iconApp: {
      display: `flex`,
      flexDirection: inside ? `row` : `column`,
      alignItems: `center`,
      width: inside ? `150px` : ` 80px`,
      margin: `8px`,
      padding: `4px`,
      fontSize: `12px`,
      fontFamily: `sans-serif bold`,
      '-webkitFontSmoothing': !inside && `none`,
      color: `rgb(255, 255, 255)`,
      textAlign: `center`,
    },
    iconText: {
      padding: '2px 4px',
      userSelect: 'none',
      textShadow: inside ? `none` : `black 0px 1px 1px`,
      fontFamily: inside
        ? `Tahoma, 'Noto Sans', sans-serif`
        : 'Pixelated MS Sans Serif',
    },
  });
  const classes = useStyles(inside);
  const item = React.useRef();
  const [, dispatch] = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  const handleClick = (e) => {
    if (item.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setActive(false);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(
      url,
      '_blank',
      'noopener,noreferrer',
    );
    if (newWindow) newWindow.opener = null;
  };
  const handleOpen = () => {
    link
      ? openInNewTab(link)
      : dispatch({ type: app, payload: true });
    dispatch({ type: `StatusBarAdd`, payload: app });
  };
  return (
    <Draggable
      bounds={`body`}
      onStart={() => setActive(true)}
      disabled={inside && true}
    >
      <div
        ref={item}
        className={classes.iconApp}
        onClick={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onDoubleClick={handleOpen}
        style={{ filter: active ? 'drop-shadow(blue 0px 0px)' : '' }}
      >
        <img
          className={classes.icon}
          src={icon}
          alt="Icon"
          draggable="false"
          style={{ opacity: active ? 0.5 : 1 }}
        />
        <span
          className={classes.iconText}
          style={{
            backgroundColor: active && 'blue',
            color:
              inside && active
                ? 'white'
                : !inside
                ? 'white'
                : 'black',
          }}
        >
          {name}
        </span>
      </div>
    </Draggable>
  );
}
