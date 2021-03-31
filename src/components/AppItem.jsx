import React from 'react';
import { GlobalContext } from '../App';
import Draggable from 'react-draggable';
export default function AppItem(props) {
  const [, dispatch] = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(false);
  const handleOpen = () => {
    dispatch({ type: props.case, payload: true });
  };
  return (
    <Draggable bounds={`body`} onStart={() => setActive(!active)}>
      <div
        className="iconApp"
        onClick={() => setActive(!active)}
        onDoubleClick={handleOpen}
        style={{ filter: active ? 'drop-shadow(blue 0px 0px)' : '' }}
      >
        <img
          className="icon"
          src={props.icon}
          alt="Icon"
          draggable="false"
          style={{ opacity: active ? 0.5 : 1 }}
        />
        <span
          style={{
            fontFamily: 'Pixelated MS Sans Serif',
            backgroundColor: active ? 'blue' : '',
            padding: '2px 4px',
          }}
        >
          {props.name}
        </span>
      </div>
    </Draggable>
  );
}
