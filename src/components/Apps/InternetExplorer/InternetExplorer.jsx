import React from 'react';
import Window from '../../Window.jsx';
import GiphyApp from './GiphyApp';
import google from '../../../media/google.png';
export default function InternetExplorerApp() {
  return (
    <Window
      windowTitle="Internet Explorer"
      case="InternetExplorer"
      width="75vw"
      height="75vh"
      // backgroundImage={google}
      // backgroundColor="white"
      margin="3px"
    >
      <GiphyApp />
    </Window>
  );
}
