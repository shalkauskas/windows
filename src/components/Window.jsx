import React from 'react';
import { GlobalContext } from '../App';
import { Rnd } from 'react-rnd';
import DropdownMenu from './Dropdown/DropdownMenu';
import useOuterClick from './useOuterClick';
function Window(props) {
  const windowRef = useOuterClick((ev) => console.log(ev.target));
  const [state, dispatch] = React.useContext(GlobalContext);
  const handleClose = () => {
    dispatch({ type: props.case, payload: false });
  };
  const setActiveApp = () => {
    dispatch({ type: `ActiveApp`, payload: props.case });
  };
  // React.useEffect(() => {
  //   dispatch({ type: `ActiveApp`, payload: props.case });
  // }, [dispatch, props.case, props.open]);
  return (
    <Rnd
      style={{
        display: props.open ? 'block' : 'none',
        zIndex: state.ActiveApp === props.case && 30,
      }}
      bounds={'body'}
      dragHandleClassName={`title-bar`}
      minWidth={400}
      minHeight={400}
      default={{
        x: 100,
        y: 100,

        width: props.width || `400px`,
        height: props.height || `400px`,
      }}
    >
      <div
        id="window"
        className="window"
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          height: 'inherit',
          width: 'inherit',
          backgroundColor: props.backgroundColor,
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundSize: 'cover',
          overflowY: 'hidden',
          boxShadow:
            state.ActiveApp !== props.case &&
            `rgb(0, 19, 140, 0.3) -1px -1px inset, rgb(8, 49, 217, 0.3) 1px 1px 0px inset, rgb(0, 30, 160, 0.3)
           -2px -2px inset, rgb(22, 106, 238, 0.3) 2px 2px inset, rgb(0, 59, 218, 0.3) -3px -3px inset, rgb(8, 85, 221, 0.3) 3px 3px inset`,
        }}
      >
        <div
          className="title-bar"
          ref={windowRef}
          onMouseDown={setActiveApp}
          style={{
            opacity: state.ActiveApp === props.case ? 1 : 0.7,
          }}
        >
          <div className="title-bar-text">{props.windowTitle}</div>
          <div className="title-bar-controls">
            <button onClick={handleClose} aria-label="Close"></button>
          </div>
        </div>
        <DropdownMenu
          handleClose={handleClose}
          noDropdown={props.noDropdown}
        />
        <div
          className="window-body"
          style={{
            margin: props.margin && props.margin,
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {props.children}
        </div>
        {props.statusBar && (
          <div className="status-bar">
            <p className="status-bar-field">
              {props.statusBarField1}
            </p>
            <p className="status-bar-field">
              {props.statusBarField2}
            </p>
            <p className="status-bar-field">
              {props.statusBarField3}
            </p>
          </div>
        )}
      </div>
    </Rnd>
  );
}

export default Window;
