import React from 'react';
import error from '../media/error.png';
import errorSound from '../media/error.mp3';
import { GlobalContext } from '../App';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  window: {
    width: '300px',
    height: '130px',
  },
  titleBarText: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: '0.5rem',
    },
  },
  windowBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      margin: '1rem',
    },
  },
});
export default function Error(props) {
  const classes = useStyles();
  const [, dispatch] = React.useContext(GlobalContext);
  const handleClose = () => {
    dispatch({ type: props.case, payload: false });
  };
  //   React.useEffect(()=> {
  //        errorSound.play()
  //   }, [])
  return (
    <div className={`${classes.window} window`}>
      <div className="title-bar">
        <div className={`${classes.titleBarText} title-bar-text`}>
          <img src={error} alt="Error" width="20px" height="20px" />
          <span>{props.title || 'C:/ Not Found!'}</span>
        </div>
        <div className="title-bar-controls">
          <button onClick={handleClose} aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        <div className={`${classes.windowBody}`}>
          <img src={error} alt="Error" width="30px" height="30px" />
          <p>{props.children || 'Application not found'}</p>
        </div>

        <button style={{ margin: '0.5rem' }} onClick={handleClose}>
          Ok
        </button>
        <audio src={errorSound} autoPlay />
      </div>
    </div>
  );
}
