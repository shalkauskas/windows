import React from 'react';
import Window from '../Window.jsx';
import playerBackground from '../../media/wmplayer.png';
export default function WindowsMediaPlayer() {
  return (
    <Window
      windowTitle="Windows Media Player"
      case="WindowsMediaPlayer"
      lockAspectRatio
      margin={0}
    >
      <div
        style={{
          padding: '1rem',
          width: 'inherit',
          height: '100%',
          // backgroundImage: `url(${playerBackground})`,
          // backgroundSize: 'contains',
        }}
      >
        <iframe
          src="https://streamable.com/e/gmx4r"
          title="Video"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </Window>
  );
}
