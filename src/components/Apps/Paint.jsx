import React from 'react';
import Window from '../Window.jsx';
import paint from '../../media/paint.png';
export default function Paint() {
  return (
    <Window
      windowTitle="MS Paint"
      icon={paint}
      app="Paint"
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
