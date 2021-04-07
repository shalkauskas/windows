import React from 'react';
import { createUseStyles } from 'react-jss';
import Item from './DropDownMenuItem';
import check from '../../media/check.png';
const useStyles = createUseStyles({
  dropdown: {
    margin: `0 3px`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: `0px 2px`,
    gap: 0,
    display: `flex`,
  },
  dropdownColumn: {
    display: 'flex',
  },
  dropdownLabel: {
    padding: `0 9px`,
    '&:hover': {
      backgroundColor: `rgb(22, 96, 232)`,
      color: `rgb(255, 255, 255)`,
    },
  },
  labelActive: {
    backgroundColor: `rgb(22, 96, 232)`,
    color: `rgb(255, 255, 255)`,
  },
  dropdownColumnItem: {
    position: 'relative',
    userSelect: 'none',
    boxShadow: 'none',
    lineHeight: '20px',
    margin: '0',
    '&:first-of-type': {
      marginLeft: '2px',
    },
  },
  dropdownRow: {
    position: 'absolute',
    width: 'max-content',
    lineHeight: '18px',
    padding: '4px 0',
    zIndex: '10',
    backgroundColor: 'rgb(255, 255, 255)',
    left: '0',
    boxShadow: 'rgb(100 100 100) 2px 2px 1px',
    border: '1px solid gray',
  },
  separator: {
    height: `7px`,
    padding: `3px 1px`,
    backgroundColor: `rgba(0, 0, 0, 0.2)`,
    backgroundClip: `content-box`,
  },
});
export default function DropdownMenu(props) {
  const classes = useStyles();
  const node = React.useRef();
  const [selectActive, setSelectActive] = React.useState(``);
  React.useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setSelectActive(``);
  };

  const handleActive = (e) => {
    setSelectActive(e.target.id);
  };
  const handleHover = (e) => {
    selectActive.length > 1 && setSelectActive(e.target.id);
  };
  return (
    <div className={classes.dropdown} ref={node}>
      <div className={classes.dropdownColumn}>
        {/* column */}
        <div className={classes.dropdownColumnItem}>
          <div
            className={`${classes.dropdownLabel} ${
              selectActive === `File` && classes.labelActive
            }`}
            id="File"
            onClick={(e) => handleActive(e)}
            onMouseEnter={(e) => handleHover(e)}
          >
            File
          </div>
          <div
            className={classes.dropdownRow}
            style={{
              display: selectActive === `File` ? 'block' : 'none',
            }}
          >
            <Item>New</Item>
            <Item disabled>Open...</Item>
            <Item disabled>Save</Item>
            <Item disabled>Save As</Item>
            <div className={classes.separator} />
            <Item disabled>Print...</Item>
            <Item disabled>Page Setup</Item>
            <div className={classes.separator} />
            <Item onExit={props.handleClose}>Exit</Item>
          </div>
        </div>
        {/* column */}
        <div className={classes.dropdownColumnItem}>
          <div
            className={`${classes.dropdownLabel} ${
              selectActive === `Edit` && classes.labelActive
            }`}
            id="Edit"
            onClick={(e) => handleActive(e)}
            onMouseEnter={(e) => handleHover(e)}
          >
            Edit
          </div>
          <div
            className={classes.dropdownRow}
            style={{
              display: selectActive === `Edit` ? 'block' : 'none',
            }}
          >
            <Item disabled helper="Ctrl+Z">
              Undo
            </Item>
            <div className={classes.separator} />
            <Item disabled helper="Ctrl+X">
              Cut
            </Item>
            <Item disabled helper="Ctrl+C">
              Copy
            </Item>
            <Item disabled helper="Ctrl+V">
              Paste
            </Item>
            <Item disabled>Delete</Item>
            <div className={classes.separator} />
            <Item>Find...</Item>
            <Item>Find Next</Item>
            <Item>Replace</Item>
            <Item>Go To...</Item>
            <div className={classes.separator} />
            <Item helper="Ctrl+A">Select All</Item>
          </div>
        </div>
        {/* column */}
        <div className={classes.dropdownColumnItem}>
          <div
            className={`${classes.dropdownLabel} ${
              selectActive === `View` && classes.labelActive
            }`}
            id="View"
            onClick={(e) => handleActive(e)}
            onMouseEnter={(e) => handleHover(e)}
          >
            View
          </div>
          <div
            className={classes.dropdownRow}
            style={{
              display: selectActive === `View` ? 'block' : 'none',
            }}
          >
            <Item
              prepend={
                <img
                  src={check}
                  alt="check"
                  style={{ verticalAlign: 'middle' }}
                />
              }
            >
              Status Bar
            </Item>
            <Item>Explorer Bar</Item>
            <div className={classes.separator} />
            <Item>Thumbnails</Item>
            <Item prepend="&bull;">Tiles</Item>
            <Item>Icons</Item>
            <Item>List</Item>
            <Item>Details</Item>
            <div className={classes.separator} />
            <Item>Go to</Item>
            <Item>Refresh</Item>
          </div>
        </div>
        {/* column */}
        <div className={classes.dropdownColumnItem}>
          <div
            className={`${classes.dropdownLabel} ${
              selectActive === `Help` && classes.labelActive
            }`}
            id="Help"
            onClick={(e) => handleActive(e)}
            onMouseEnter={(e) => handleHover(e)}
          >
            Help
          </div>
          <div
            className={classes.dropdownRow}
            style={{
              display: selectActive === `Help` ? 'block' : 'none',
            }}
          >
            <Item>
              <a
                href="https://github.com/shalkauskas/windows"
                rel="noreferrer"
                target="_blank"
              >
                Help and Support Center
              </a>
            </Item>
            <div className={classes.separator} />
            <Item>
              <a
                href="https://github.com/shalkauskas/windows"
                rel="noreferrer"
                target="_blank"
              >
                Is this copy of Windows legal?
              </a>
            </Item>
            <Item>
              <a
                href="https://github.com/shalkauskas/windows"
                rel="noreferrer"
                target="_blank"
              >
                About Windows
              </a>
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
}
