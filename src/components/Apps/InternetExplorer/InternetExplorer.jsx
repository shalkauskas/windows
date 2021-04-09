import React from 'react';
import Window from '../../Window.jsx';
import GiphyApp from './GiphyApp';
import Controls from '../../Dropdown/Controls';
import html from '../../../media/html.png';
import internet from '../../../media/internet.png';
export default function InternetExplorerApp() {
  const statusBar1 = (
    <div>
      <img
        src={html}
        alt="html"
        width="15px"
        style={{ verticalAlign: 'sub', margin: '0 2px' }}
      />
      Done
    </div>
  );
  const statusBar2 = (
    <div style={{ textAlign: 'right', paddingRight: '50px' }}>
      <img
        src={internet}
        alt="internet"
        width="15px"
        style={{ verticalAlign: 'sub', margin: '0 2px' }}
      />
      Internet
    </div>
  );

  return (
    <Window
      windowTitle="Internet Explorer"
      icon={html}
      case="InternetExplorer"
      width="75vw"
      height="75vh"
      margin="3px"
      statusBar
      statusBarField1={statusBar1}
      statusBarField2={''}
      statusBarField3={statusBar2}
    >
      <Controls />
      <GiphyApp />
    </Window>
  );
}
