import React from 'react';
import { GlobalContext } from '../App';
import { Rnd } from 'react-rnd';
import { createUseStyles } from 'react-jss';
import DropdownMenu from './Dropdown/DropdownMenu';
// import OutsideClicker from './useOuterClick';
const useStyles = createUseStyles({
  window: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: 'inherit',
    width: 'inherit',
    overflow: 'hidden',
    // backgroundColor: props.backgroundColor,
  },
  title: {
    userSelect: 'none',
    '& img': {
      verticalAlign: 'bottom',
      marginRight: '4px',
    },
  },
  windowBody: {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    textAlign: `center`,
  },
  statusBar: {
    margin: `0 3px`,
    boxShadow: `inset 0 1px 2px grey`,
    padding: `4px 2px`,
    gap: 0,
    display: `flex`,
  },
  statusBarField: {
    boxShadow: `none`,
    padding: `1px 2px`,
    borderRight: `1px solid rgba(208,206,191,.75)`,
    borderLeft: `1px solid hsla(0,0%,100%,.75)`,
    flexGrow: 1,
    margin: 0,
    '& :first-of-type': {
      borderLeft: `none`,
    },
  },
});
export default function Window(props) {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const [maximize, setMaximize] = React.useState(false);
  const handleClose = () => {
    dispatch({ type: props.case, payload: false });
  };
  const setActiveApp = () => {
    dispatch({ type: `ActiveApp`, payload: props.case });
  };
  React.useEffect(() => {
    dispatch({ type: `ActiveApp`, payload: props.case });
  }, [dispatch, props.case, props.open]);
  const handleMaximize = () => {
    setMaximize(!maximize);
  };
  return (
    // <OutsideClicker
    //   onClickOutside={() =>
    //     dispatch({ type: `ActiveApp`, payload: `` })
    //   }
    // >
    <Rnd
      lockAspectRatio={props.lockAspectRatio && true}
      onDrag={setActiveApp}
      style={{
        display: 'block',
        zIndex: state.ActiveApp === props.case && 30,
      }}
      bounds={'body'}
      dragHandleClassName={`title-bar`}
      minWidth={400}
      minHeight={200}
      // position={{to do}}
      // size={{
      //   height: maximize ? `100%` : props.height,
      //   width: maximize ? `100%` : props.width,
      // }}
      default={{
        x: 100,
        y: 100,
        width: props.width ? props.width : `400px`,
        height: props.height ? props.height : `400px`,
      }}
    >
      {/* window wrapper */}
      <div
        id="window"
        className={`${classes.window} window`}
        style={{
          boxShadow:
            state.ActiveApp !== props.case &&
            `rgb(0, 19, 140, 0.3) -1px -1px inset, rgb(8, 49, 217, 0.3) 1px 1px 0px inset, rgb(0, 30, 160, 0.3)
           -2px -2px inset, rgb(22, 106, 238, 0.3) 2px 2px inset, rgb(0, 59, 218, 0.3) -3px -3px inset, rgb(8, 85, 221, 0.3) 3px 3px inset`,
        }}
      >
        {/* title bar */}
        <div
          onClickCapture={setActiveApp}
          className="title-bar"
          style={{
            opacity: state.ActiveApp === props.case ? 1 : 0.7,
          }}
        >
          <div className={`${classes.title} title-bar-text`}>
            {props.icon && (
              <img src={props.icon} alt="icon" width="15px" />
            )}
            {props.windowTitle}
          </div>
          <div className="title-bar-controls">
            {/* <button
              aria-label="Maximize"
              onClick={handleMaximize}
            /> */}
            <button onClick={handleClose} aria-label="Close" />
          </div>
        </div>
        {!props.noDropdown && (
          <DropdownMenu handleClose={handleClose} />
        )}
        {/* window body */}
        <div
          onClickCapture={setActiveApp}
          className={`${classes.windowBody} window-body`}
          style={{
            margin: props.margin && props.margin,
          }}
        >
          {props.children}
        </div>
        {/* status bar */}
        {props.statusBar && (
          <div className={classes.statusBar}>
            <div className={classes.statusBarField}>
              {props.statusBarField1}
            </div>
            <div className={classes.statusBarField}>
              {props.statusBarField2}
            </div>
            <div className={classes.statusBarField}>
              {props.statusBarField3}
            </div>
          </div>
        )}
      </div>
    </Rnd>
    // </OutsideClicker>
  );
}
