import React from 'react';
import Gif from './ResultIem';
import { createUseStyles } from 'react-jss';
import Search from './Search';
import { GlobalContext } from '../../../App';
const useStyles = createUseStyles({
  wrapperResult: {
    width: '100%',
    height: 'inherit',
    padding: '1rem',
    fontFamily: 'Tahoma',
  },
  strip: {
    backgroundColor: '#E6ECFA',
    padding: '0.2rem 0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #6C6DBB',
    '& span': {
      fontSize: '14px',
    },
    '& h4': {
      fontSize: '20px',
    },
  },
  error: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '14px',
    padding: '3rem',
    '& p': {
      marginBottom: '0.7rem',
    },
  },
});
export default function GifList(props) {
  const classes = useStyles();
  const [state] = React.useContext(GlobalContext);
  const gifs = state.InternetExplorer.results;
  const query = state.InternetExplorer.query;
  const pagination = state.InternetExplorer.pagination;
  return (
    <div className={classes.wrapperResult}>
      <Search mini />
      <div className={classes.strip}>
        <h4>Images</h4>
        <span>
          Result <b>1 - {pagination.count}</b> of about{' '}
          <b>{pagination.total_count}</b> for <b>"{query}"</b>
        </span>
      </div>
      {gifs.length > 1 ? (
        gifs.map((gif) => {
          return <Gif key={gif.id} gif={gif} />;
        })
      ) : (
        <div className={classes.error}>
          <p>
            Your search - <b>{query}</b> - did not match any
            documents.
          </p>
          <p>Suggestions</p>
          <ul>
            <li>Make sure that all words are spelled correctly</li>
            <li>Try different keywords</li>
            <li>Try more general keywords</li>
          </ul>
        </div>
      )}
    </div>
  );
}
