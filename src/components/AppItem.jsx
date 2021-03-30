import React from 'react';
import { GlobalContext } from '../App';

export default function AppItem(props) {
  const [, dispatch] = React.useContext(GlobalContext);
  const handleOpen = () => {
    dispatch({ type: props.case, payload: true });
  };
  return (
    <>
      <div className="iconApp" onClick={handleOpen}>
        <img className="icon" src={props.icon} alt="Icon" />
        <span style={{ fontFamily: 'Pixelated MS Sans Serif' }}>
          {props.name}
        </span>
      </div>
      {props.children}
    </>
  );
}
