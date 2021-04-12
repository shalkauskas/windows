import React from 'react';
import Window from '../Window.jsx';
import player from '../../media/player.png';
import playerBackground from '../../media/player-background-hollow.png';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  playerWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    backgroundImage: `url(${playerBackground})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  iframe: {
    borderRadius: '20px',
    zIndex: 0,
    position: 'absolute',
    left: '100px',
    marginTop: `29px`,
    width: `683px`,
    height: `426px`,
    paddingTop: `12px`,
    overflow: 'hidden',
  },
});
export default function WindowsMediaPlayer() {
  const classes = useStyles();
  return (
    <Window
      icon={player}
      windowTitle="Windows Media Player"
      app="WindowsMediaPlayer"
      lockAspectRatio
      disableResizing
      margin={`0px 3px`}
      width={800}
      height={596}
    >
      <div className={classes.playerWrapper}>
        <div className={classes.iframe}>
          <iframe
            style={{ overflow: 'hidden' }}
            src="https://streamable.com/e/gmx4r"
            title="Video"
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </div>
    </Window>
  );
}
