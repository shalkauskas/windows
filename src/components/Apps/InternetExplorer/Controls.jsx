import React from 'react';
import { createUseStyles } from 'react-jss';
import assets from './assets';
import { GlobalContext } from '../../../App';
const useStyles = createUseStyles({
  dropdown: {
    display: `flex`,
    alignItems: 'center',
    height: '36px',
    margin: `0 3px`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: `0px 2px`,
    fontFamily: 'Tahoma',
  },
  address: {
    width: '100%',
    display: `flex`,
    alignItems: 'center',
    height: '26px',
    borderTop: `1px solid rgba(255, 255, 255, 0.7)`,
    boxShadow: `rgb(45 45 45) 0px -1px 1px 0px inset`,
    margin: `0`,
    '& $select': {
      width: '100%',
      paddingLeft: '20px',
    },
    '& $dropdownColumn': {
      position: 'relative',
    },
  },
  dropdownColumn: {
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
  },
  dropdownColumnItem: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    boxShadow: 'none',
    padding: '1px 3px 0',
    lineHeight: '20px',
    height: 'inherit',
    margin: '2px 0',
    borderRadius: '3px',
    border: `1px solid rgba(0, 0, 0, 0)`,
    '&:hover': {
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      boxShadow: `rgb(0 0 0 / 10%) 0px -1px 1px inset`,
    },
    '& img': {
      marginRight: '3px',
      maxWidth: '25px',
    },
  },
  disabled: {
    border: `1px solid rgba(0, 0, 0, 0)`,
    boxShadow: 'none',
    color: 'gray',
    filter: `grayscale(100%)`,
    '&:hover': {
      border: `1px solid rgba(0, 0, 0, 0)`,
      boxShadow: `none`,
    },
  },
  separator: {
    height: `90%`,
    width: `1px`,
    backgroundColor: `rgba(0, 0, 0, 0.2)`,
    margin: `0px 2px`,
  },
  addressIcon: {
    verticalAlign: 'sub',
    margin: '0 4px',
    position: 'absolute',
    zIndex: '5',
  },
});
export default function Controls() {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(GlobalContext);
  const submitted = state.InternetExplorer.submitted;
  const home = () =>
    submitted &&
    dispatch({
      type: 'InternetExplorerResults',
      payload: {
        submitted: false,
      },
    });
  return (
    <>
      <div className={classes.dropdown}>
        <div className={classes.dropdownColumn}>
          {/* column */}
          <div
            onClick={home}
            className={`${classes.dropdownColumnItem} ${
              !submitted && classes.disabled
            }`}
          >
            <img src={assets.back} alt="Back" /> Back
          </div>
          {/* column */}
          <div
            className={`${classes.dropdownColumnItem} ${classes.disabled}`}
          >
            <img src={assets.forward} alt="Forward" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.stop} alt="Stop" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.refresh} alt="Refresh" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem} onClick={home}>
            <img src={assets.home} alt="Home" />
          </div>
          <div className={classes.separator} />
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.search} alt="Search" /> Search
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.favorites} alt="Favorites" /> Favorites
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.recent} alt="Recent" />
          </div>
          <div className={classes.separator} />
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.mail} alt="mail" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.printer} alt="printer" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.help} alt="help" />
          </div>
          {/* column */}
          <div className={classes.dropdownColumnItem}>
            <img src={assets.messenger} alt="messenger" />
          </div>
        </div>
      </div>
      <div className={classes.address}>
        <div className={classes.dropdownColumn}>
          {/* column */}
          <div
            className={`${classes.dropdownColumnItem} ${classes.disabled}`}
          >
            Address
          </div>
        </div>
        {/* column */}
        <div
          className={classes.dropdownColumn}
          style={{ flexGrow: 1 }}
        >
          <img
            src={assets.html}
            alt="html"
            width="15px"
            className={classes.addressIcon}
          />
          <select className={classes.select}>
            <option>{``}https://google.com</option>
          </select>
        </div>
        <div className={classes.dropdownColumn}>
          <div
            className={classes.dropdownColumnItem}
            style={{ paddingRight: '30px' }}
          >
            <img src={assets.go} alt="go" width="24px" />
            Go
          </div>
          <div className={classes.separator} />
          <div className={classes.dropdownColumnItem}>
            Links &#8608;
          </div>
        </div>
      </div>
    </>
  );
}
