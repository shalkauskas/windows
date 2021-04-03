import { createUseStyles } from 'react-jss';
import userpic from '../../media/duck.bmp';

const useStyles = createUseStyles({
  header: {
    color: 'white',
    height: '54px',
    padding: `6px 5px 5px`,
    fontSize: `16px`,
    fontWeight: 700,
    textShadow: `rgb(0 0 0 / 70%) 1px 1px`,
    display: 'flex',
    alignItems: 'center',
    boxShadow: `rgb(0 0 0 / 50%) 2px 4px 2px`,
    borderTopLeftRadius: `5px`,
    borderTopRightRadius: `5px`,
    background: `linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%)`,
    '& img': {
      marginRight: `5px`,
      borderRadius: `3px`,
      border: `2px solid rgba(222, 222, 222, 0.8)`,
    },
  },
});
export default function StartMenuHeader() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img src={userpic} alt="User pic" width="42px" height="42px" />
      User
    </header>
  );
}
