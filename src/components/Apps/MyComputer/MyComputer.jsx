import React from 'react';
import Window from '../../Window.jsx';
import myComputer from '../../../media/my_computer.png';
import github from '../../../media/github.svg';
import linkedin from '../../../media/linkedin.svg';
import avatar from '../../../media/avatar.png';
import disk from '../../../media/disk.png';
import dvd from '../../../media/dvd.png';
import Controls from '../../Dropdown/Controls.jsx';
import { createUseStyles } from 'react-jss';
import SideBar from './SideBar.jsx';
import AppItem from '../../AppItem.jsx';
const useStyles = createUseStyles({
  myComputer: {
    display: 'flex',
    height: '100%',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
  },
  mainHeader: {
    display: 'flex',
    fontWeight: 700,
    padding: '2px 0 2px 15px',
  },
  headerSeparator: {
    height: '1px',
    width: '300px',
    background: `linear-gradient(to right, rgb(112, 191, 255) 0px, rgb(255, 255, 255) 100%)`,
  },
  content: {
    display: 'flex',
  },
});
export default function MyComputerApp() {
  const classes = useStyles();
  return (
    <Window
      windowTitle="My Computer"
      icon={myComputer}
      case="MyComputer"
      margin={'0 3px'}
      width={800}
      height={600}
    >
      <Controls myComputer />
      <div className={classes.myComputer}>
        <SideBar />
        <div className={classes.main}>
          <div className={classes.mainHeader}>
            <span>Check out these places too!</span>
          </div>
          <div className={classes.headerSeparator} />
          <div className={classes.content}>
            <AppItem
              icon={github}
              name="Github"
              inside
              link="https://github.com/shalkauskas"
            />
            <AppItem
              icon={linkedin}
              name="Linkedin"
              inside
              link="www.linkedin.com/in/ihor-shalkauskas"
            />
            <AppItem
              icon={avatar}
              name="My website"
              inside
              link="https://shalkauskas.com/"
            />
          </div>
          <div className={classes.mainHeader}>
            <span>Hard Disc Drives</span>
          </div>
          <div className={classes.headerSeparator} />
          <div className={classes.content}>
            <AppItem
              icon={disk}
              name="Local Disk (C:)"
              app="Error"
              inside
            />
          </div>
          <div className={classes.mainHeader}>
            <span>Devices with Removable Storage</span>
          </div>
          <div className={classes.headerSeparator} />
          <div className={classes.content}>
            <AppItem
              icon={dvd}
              name="DVD Drive (D:)"
              app="Error"
              inside
            />
          </div>
        </div>
      </div>
    </Window>
  );
}
