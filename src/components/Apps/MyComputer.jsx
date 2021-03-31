import React from 'react';
import Window from '../Window.jsx';
import { GlobalContext } from '../../App';
function MyComputerApp() {
  const [state] = React.useContext(GlobalContext);
  return (
    <Window
      windowTitle="My Computer"
      case="MyComputer"
      open={state.MyComputer.appOpen}
    >
      <article role="tabpanel">
        <p>Access denied: Property of Bill Gates</p>
      </article>
    </Window>
  );
}
export default MyComputerApp;
