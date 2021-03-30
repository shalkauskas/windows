import React from 'react';
import Window from '../Window.jsx';
import { GlobalContext } from '../../App';
function MyComputerApp() {
  const [state] = React.useContext(GlobalContext);
  return (
    <div
      style={{ display: state.MyComputer.appOpen ? 'block' : 'none' }}
    >
      <Window windowTitle="My Computer" case="MyComputer">
        <p>Access denied: Property of Bill Gates</p>
      </Window>
    </div>
  );
}
export default MyComputerApp;
