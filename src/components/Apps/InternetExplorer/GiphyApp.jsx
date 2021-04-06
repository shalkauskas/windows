import React from 'react';
import Search from './Search.jsx';
import Result from './Result.jsx';
import { createUseStyles } from 'react-jss';
import { GlobalContext } from '../../../App';
const useStyles = createUseStyles({
  wrapperApp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `white`,
    height: `100%`,
    overflow: 'auto',
  },
});
export default function GiphyApp() {
  const classes = useStyles();
  const [state] = React.useContext(GlobalContext);
  return (
    <div className={classes.wrapperApp}>
      {state.InternetExplorer.submitted ? <Result /> : <Search />}
    </div>
  );
}
