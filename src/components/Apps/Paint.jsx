import React from 'react';
import Window from '../Window.jsx';
import { GlobalContext } from '../../App';
export default function Paint() {
  const [state] = React.useContext(GlobalContext);
  return (
    <Window
      windowTitle="MS Paint"
      case="Paint"
      open={state.Paint.appOpen}
      width={1000}
      height={600}
      noDropdown
      margin={3}
    >
      <iframe
        src="https://jspaint.app"
        frameBorder="0"
        title="paint"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(192,192,192)',
        }}
      />
    </Window>
  );
}
