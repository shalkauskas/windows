import React, { useState } from 'react';
import myComputer from '../media/my_computer.png';
import Window from './Window.jsx';

function MyComputerApp() {
  const [showWindow, setShowWindow] = useState('none');

  const handleCloseWindow = () => setShowWindow('none');
  const handleShowWindow = () => {
    setShowWindow('block');
  };

  return (
    <div>
      <div className="iconApp">
        <img
          onClick={handleShowWindow}
          className="icon"
          src={myComputer}
          alt=""
        />
        <span style={{ fontFamily: 'Pixelated MS Sans Serif' }}>
          My Computer
        </span>
      </div>
      <Window
        showWindow={showWindow}
        onHideWindow={handleCloseWindow}
        windowTitle="Error"
        windowWidth="30vh"
        windowHeight="10vh"
        windowContent="Access denied: Property of Bill Gates"
      />
    </div>
  );
}
export default MyComputerApp;
