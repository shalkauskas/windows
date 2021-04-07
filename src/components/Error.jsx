import React from 'react';
import error from '../media/error.png';
import errorSound from '../media/error.mp3';
import { GlobalContext } from '../App';
import { createUseStyles } from 'react-jss';
import Window from '../components/Window';
const useStyles = createUseStyles({
  windowBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    '& p': {
      margin: '1rem',
    },
  },
  errorContent: {
    display: 'flex',
  },
  button: {
    margin: '0.5rem',
    textAlign: 'center',
  },
});
export default function Error(props) {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const handleClose = () => {
    dispatch({ type: 'Error', payload: false });
  };
  return (
    <Window
      noDropdown
      width={300}
      height={150}
      icon={error}
      case="Error"
      windowTitle={props.title || 'C:/ Not Found!'}
    >
      <div className={`${classes.windowBody}`}>
        <div className={classes.errorContent}>
          <img src={error} alt="Error" width="30px" height="30px" />
          <p>{props.children || state.Error.error}</p>
        </div>
        <div className={classes.button}>
          <button onClick={handleClose}>Ok</button>
        </div>

        <audio src={errorSound} autoPlay />
      </div>
    </Window>
  );
}
