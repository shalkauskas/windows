import { createUseStyles } from 'react-jss';
import logout from '../../media/session-logout.png';
import shutdown from '../../media/system-shutdown.png';
const useStyles = createUseStyles({
  footer: {
    justifyContent: 'flex-end',
    height: '36px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',

    background: `linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%)`,
    '& div': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '11px',
      marginRight: '10px',
      padding: '4px',
      '&:hover': {
        background: 'rgba(60, 80, 210, 0.5)',
      },
      '& img': {
        marginRight: '4px',
      },
    },
  },
});
export default function StartMenuFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <img width="26px" height="26px" src={logout} alt="Log Off" />
        Log Off
      </div>
      <div>
        <img
          width="26px"
          height="26px"
          src={shutdown}
          alt="Sutdown"
        />
        Turn Off Computer
      </div>
    </footer>
  );
}
