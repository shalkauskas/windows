import { createUseStyles } from 'react-jss';

import StartMenuHeader from './StartMenuHeader';
import StartMenuFooter from './StartMenuFooter';
import StartMenuMain from './StartMenuMain';
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

export default function StartMenu(props) {
  const classes = useStyles();

  return (
    <div
      className={classes.dropdownRow}
      style={{
        display: !props.startOpen && 'none',
      }}
    >
      <StartMenuHeader />
      <StartMenuMain />
      <StartMenuFooter />
    </div>
  );
}
