import React from 'react';
import Window from '../../Window.jsx';
import GiphyApp from './GiphyApp';
import google from '../../../media/google.png';
import { GlobalContext } from '../../../App';
function InternetExplorerApp() {
  const [state] = React.useContext(GlobalContext);
  return (
    <Window
      windowTitle="Internet Explorer"
      case="InternetExplorer"
      width="75vw"
      height="75vh"
      backgroundImage={google}
      backgroundColor="white"
      margin="3px"
      open={state.InternetExplorer.appOpen}
    >
      <GiphyApp />
    </Window>
  );
}

export default InternetExplorerApp;
