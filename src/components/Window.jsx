import React from 'react';
import { GlobalContext } from '../App';

function Window(props) {
  const [, dispatch] = React.useContext(GlobalContext);
  const handleClose = () => {
    dispatch({ type: props.case, payload: false });
  };
  return (
    <div
      className="window"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '50vh',
        minHeight: '30vh',
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        overflowY: 'hidden',
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{props.windowTitle}</div>
        <div className="title-bar-controls">
          <button onClick={handleClose} aria-label="Close"></button>
        </div>
      </div>
      <div
        className="window-body"
        style={{
          margin: props.margin && props.margin,
          flexGrow: '1',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Window;
