import React from 'react';
import { createUseStyles } from 'react-jss';
import { GlobalContext } from '../../App';
import assets from './assets';
const useStyles = createUseStyles({
  main: {
    display: 'flex',
    borderTop: `1px solid rgb(56, 93, 231)`,
    boxShadow: `rgb(56 93 231) 0px 1px`,
  },
  left: {
    backgroundColor: 'white',
    padding: `6px 5px 0px`,
    width: `190px`,
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    backgroundColor: `rgb(203, 227, 255)`,
    borderLeft: `1px solid rgba(58, 58, 255, 0.37)`,
    padding: `6px 5px 4px`,
    width: `190px`,
    color: `rgb(0, 19, 107)`,
    '& $item': {
      padding: `0 2px`,
    },
  },
  item: {
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    marginBottom: '3px',
    '&:hover': {
      color: `white`,
      backgroundColor: `rgb(47, 113, 205)`,
    },
    '& img': {
      width: '30px',
      height: '30px',
      marginRight: '3px',
    },
  },
  separator: {
    height: `2.5px`,
    background: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box`,
    borderTop: `3px solid transparent`,
    borderBottom: `3px solid transparent`,
  },
});
export default function StartMenuMain() {
  const classes = useStyles();
  const [, dispatch] = React.useContext(GlobalContext);
  const handleOpen = (app) => {
    dispatch({ type: app, payload: true });
    dispatch({ type: `StartMenu`, payload: false });
  };
  return (
    <main className={classes.main}>
      <div className={classes.left}>
        <div
          className={classes.item}
          onClick={() => handleOpen(`InternetExplorer`)}
        >
          <img src={assets.internetExplorer} alt="icon" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '12px',
            }}
          >
            <span>
              <b>Internet</b>
            </span>
            <span style={{ color: `rgba(0, 0, 0, 0.4)` }}>
              Internet Explorer
            </span>
          </div>
        </div>
        <div className={classes.item}>
          <img src={assets.mail} alt="icon" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '12px',
            }}
          >
            <span>
              <b>E-mail</b>
            </span>
            <span style={{ color: `rgba(0, 0, 0, 0.4)` }}>
              Outlook Express
            </span>
          </div>
        </div>
        <div className={classes.separator} />

        <div
          className={classes.item}
          onClick={() => handleOpen(`ToDoApp`)}
        >
          <img src={assets.todoApp} alt="icon" />
          Task Manager
        </div>
        <div
          className={classes.item}
          onClick={() => handleOpen(`Weather`)}
        >
          <img src={assets.weatherIcon} alt="icon" />
          Weather
        </div>
        <div
          className={classes.item}
          onClick={() => handleOpen(`Paint`)}
        >
          <img src={assets.paint} alt="icon" />
          Paint
        </div>
        <div className={classes.item}>
          <img src={assets.office} alt="icon" />
          Microsoft Office
        </div>
        <div className={classes.item}>
          <img src={assets.acrobatReader} alt="icon" />
          Acrobat Reader
        </div>
        <div className={classes.item}>
          <img src={assets.player} alt="icon" />
          Windows Media Player
        </div>
        <div className={classes.item}>
          <img src={assets.messenger} alt="icon" />
          Windows Messenger
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.item}>
          <img src={assets.documents} alt="icon" /> <b>My Douments</b>
        </div>
        <div className={classes.item}>
          <img src={assets.images} alt="icon" /> <b>My Pictures</b>
        </div>
        <div className={classes.item}>
          <img src={assets.music} alt="icon" /> <b>My Music</b>
        </div>
        <div
          className={classes.item}
          onClick={() => handleOpen(`MyComputer`)}
        >
          <img src={assets.myComputer} alt="icon" />{' '}
          <b>My Computer</b>
        </div>
        <div className={classes.separator} />
        <div className={classes.item}>
          <img src={assets.controlPanel} alt="icon" />
          Control Panel
        </div>
        <div className={classes.item}>
          <img src={assets.settings} alt="icon" />
          Set Programm Access and Defaults
        </div>
        <div className={classes.item}>
          <img src={assets.printer} alt="icon" />
          Printers and faxes
        </div>
        <div className={classes.item}>
          <img src={assets.network} alt="icon" />
          Network
        </div>
        <div className={classes.separator} />
        <div className={classes.item}>
          <img src={assets.help} alt="icon" />
          Help and Support
        </div>
        <div className={classes.item}>
          <img src={assets.search} alt="icon" />
          Search
        </div>
        <div className={classes.item}>
          <img src={assets.run} alt="icon" />
          Run...
        </div>
      </div>
    </main>
  );
}
