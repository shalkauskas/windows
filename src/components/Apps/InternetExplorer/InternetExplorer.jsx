import React, { useState } from 'react';
import internetExplorer from '../../../media/internet_explorer.png';
import Window from '../../Window.jsx';
import GiphyApp from './GiphyApp';
import google from '../../../media/google.png';
function InternetExplorerApp() {
  const [showWindow, setShowWindow] = useState('none');

  const handleCloseWindow = () => setShowWindow('none');
  const handleShowWindow = () => setShowWindow('block');
  return (
    <div>
      <div className="iconApp">
        <img
          id="internet-explorer"
          onClick={handleShowWindow}
          className="icon"
          src={internetExplorer}
          alt=""
        />
        <span style={{ fontFamily: 'Pixelated MS Sans Serif' }}>
          Internet Explorer
        </span>
      </div>
      <div>
        <Window
          showWindow={showWindow}
          onHideWindow={handleCloseWindow}
          windowTitle="Internet Explorer"
          windowWidth="100vh"
          windowHeight="95vh"
          backgroundImage={google}
          windowContent={<GiphyApp />}
          backgroundColor="white"
        />
      </div>
    </div>
  );
}

export default InternetExplorerApp;
