import React from 'react';
import { createUseStyles } from 'react-jss';
import StartMenuHeader from './StartMenuHeader';
import StartMenuFooter from './StartMenuFooter';
import StartMenuMain from './StartMenuMain';
import { GlobalContext } from '../../App';
const useStyles = createUseStyles({
  dropdownRow: {
    position: 'absolute',
    width: 'max-content',
    lineHeight: '18px',
    zIndex: '10',
    backgroundColor: 'rgb(66, 130, 214)',
    left: '0',
    bottom: `100%`,
    fontFamily: 'Arial',
    userSelect: 'none',
    padding: '2px',
    borderTopLeftRadius: `5px`,
    borderTopRightRadius: `5px`,
  },
});

export default function StartMenu() {
  const classes = useStyles();
  const [state] = React.useContext(GlobalContext);
  return (
    <div
      className={classes.dropdownRow}
      style={{
        display: !state.StartMenu.open && 'none',
      }}
    >
      <StartMenuHeader />
      <StartMenuMain />
      <StartMenuFooter />
    </div>
  );
}
