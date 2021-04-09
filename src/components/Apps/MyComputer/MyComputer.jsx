import React from 'react';
import Window from '../../Window.jsx';
import myComputer from '../../../media/my_computer.png';

import Controls from '../../Dropdown/Controls.jsx';
import { createUseStyles } from 'react-jss';
import SideBar from './SideBar.jsx';
const useStyles = createUseStyles({
  myComputer: {
    display: 'flex',
    height: '100%',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
  },
});
export default function MyComputerApp() {
  const classes = useStyles();
  return (
    <Window
      windowTitle="My Computer"
      icon={myComputer}
      case="MyComputer"
      margin={3}
      width={800}
      height={600}
    >
      <Controls myComputer />
      <div className={classes.myComputer}>
        <SideBar />
        <div className={classes.main}>
          <p>Access denied: Property of Bill Gates</p>
        </div>
      </div>
    </Window>
  );
}
