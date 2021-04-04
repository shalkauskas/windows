import React from 'react';
import Window from '../Window.jsx';
export default function Paint() {
  return (
    <Window
      windowTitle="MS Paint"
      case="Paint"
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
