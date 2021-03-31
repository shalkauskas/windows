import React from 'react';
import { GlobalContext } from '../App';
import { Rnd } from 'react-rnd';
function Window(props) {
  const [, dispatch] = React.useContext(GlobalContext);
  const handleClose = () => {
    dispatch({ type: props.case, payload: false });
  };
  return (
    <Rnd
      style={{ display: props.open ? 'block' : 'none' }}
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
        className="window"
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          height: 'inherit',
          width: 'inherit',
          // minWidth: '50vh',
          // minHeight: '30vh',
          // width: props.width,
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
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {props.children}
        </div>
      </div>
    </Rnd>
  );
}

export default Window;
