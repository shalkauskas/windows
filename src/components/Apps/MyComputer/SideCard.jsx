import expand from '../../../media/expand.png';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  sideCard: {
    marginBottom: '10px',
  },
  sideCardContent: {
    padding: `5px 10px`,
    background: `linear-gradient(to right, rgb(180, 200, 251) 0%, rgb(164, 185, 251) 50%, rgb(180, 200, 251) 100%) rgba(198, 211, 255, 0.87)`,
    '& ul': {
      listStyle: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      '& li': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: `10px`,
        lineHeight: `14px`,
        color: `rgb(12, 50, 125)`,
        margin: '1px 0',
        '&:hover': {
          textDecoration: 'underline',
          color: 'rgb(43, 114, 255)',
        },
        '& img': {
          width: '15px',
          marginRight: '2px',
        },
      },
    },
  },
  sideCardHeader: {
    background: `linear-gradient(to right, rgb(240, 240, 255) 0px, rgb(240, 240, 255) 30%, rgb(168, 188, 255) 100%)`,
    height: '23px',
    paddingLeft: `11px`,
    paddingRight: `2px`,
    borderTopLeftRadius: `3px`,
    borderTopRightRadius: `3px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '& span': {
      fontWeight: 'bold',
      color: `rgb(12, 50, 125)`,
    },
  },
});
export default function SideCard(props) {
  const classes = useStyles();
  const { assets } = props;
  return (
    <div className={classes.sideCard}>
      <div className={classes.sideCardHeader}>
        <span>{assets.header}</span>
        <img src={expand} alt="expand" />
      </div>
      <div className={classes.sideCardContent}>
        <ul>
          <li>
            <img src={assets.item1.img} alt="expand" />
            <span>{assets.item1.text}</span>
          </li>
          <li>
            {' '}
            <img src={assets.item2.img} alt="expand" />
            <span>{assets.item2.text}</span>
          </li>
          <li>
            {' '}
            <img src={assets.item3.img} alt="expand" />
            <span>{assets.item3.text}</span>
          </li>
          {assets.item4 && (
            <li>
              <img src={assets.item4.img} alt="expand" />
              <span>{assets.item4.text}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
