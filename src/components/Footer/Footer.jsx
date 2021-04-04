import React from 'react';
import { createUseStyles } from 'react-jss';
import Time from './Time';
import StartMenu from './StartMenu';
import { GlobalContext } from '../../App';

import assets from './assets';
const useStyles = createUseStyles({
  footer: {
    position: `fixed`,
    width: `100%`,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '30px',
  },
  footerContainer: {},
  startButton: {
    '&:hover': {
      filter: `brightness(105%)`,
    },
  },
  rightSide: {
    background: `linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%)`,
    display: 'flex',
    paddingLeft: '10px',
  },
  leftSide: {
    background: `linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%)`,
    display: 'flex',
    flexGrow: 1,
  },
  startWrapper: {
    position: 'relative',
  },
  notifications: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    '& img': {
      width: '15px',
      height: '15px',
      marginRight: '4px',
    },
  },
});
export default function Footer() {
  const startRef = React.useRef();
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const [startOpen, setStartOpen] = React.useState(false);
  const handleMenu = () => {
    dispatch({ type: `StartMenu`, payload: !state.StartMenu.open });
  };
  React.useEffect(() => {
    const handleClick = (e) => {
      if (startRef.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      dispatch({ type: `StartMenu`, payload: false });
    };
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [dispatch]);

  return (
    <footer className={classes.footer}>
      <div className={classes.leftSide}>
        <div className={classes.startWrapper} ref={startRef}>
          <img
            src={assets.start}
            alt="start"
            width="100px"
            height="inherit"
            className={classes.startButton}
            style={{
              filter: state.StartMenu.open && `brightness(105%)`,
            }}
            onClick={handleMenu}
          />
          <StartMenu />
        </div>
      </div>

      <div className={classes.rightSide}>
        <div className={classes.notifications}>
          <img src={assets.sound} alt="notification" />
          <img src={assets.printerError} alt="notification" />
          <img src={assets.important} alt="notification" />
        </div>
        <Time />
      </div>
    </footer>
  );
}
