import React, { useState } from 'react';
import googleLogo from '../../../media/google-logo.png';
import { createUseStyles } from 'react-jss';
import { GlobalContext } from '../../../App';
export default function Search(props) {
  const useStyles = createUseStyles({
    searchWrapper: {
      display: 'flex',
      flexDirection: props.mini ? `row` : 'column',
      justifyContent: props.mini ? `flex-start` : 'center',
      alignItems: 'center',
    },
    searchMain: {
      width: props.mini ? `50%` : '100%',
    },
    optionsGroup: {
      width: `100%`,
      display: 'flex',
      justifyContent: props.mini ? `space-between` : 'space-evenly',
      fontSize: '16px',
      fontFamily: 'Times New Roman',
      margin: props.mini ? 0 : '1rem 0',
      padding: props.mini && '0 9rem 0 1.5rem',
      '& a': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
    form: {
      display: 'flex',
      flexDirection: props.mini ? 'row' : 'column',
      alignItems: 'center',
      padding: props.mini && '0 1rem',
    },
    input: {
      width: `100%`,
      padding: `5px`,
    },
    searchButton: {
      margin: '1rem',
    },
  });
  const classes = useStyles(props);
  const [state, dispatch] = React.useContext(GlobalContext);
  const [searchText, setSearchText] = useState(
    state.InternetExplorer.query,
  );
  // we add a function to handle the submission of the search form
  const handleSubmit = (e) => {
    e.preventDefault();
    const key = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://cors-anywhere-is.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'InternetExplorerResults',
          payload: {
            gifs: response.data,
            query: searchText,
            pagination: response.pagination,
            submitted: true,
          },
        });
      });
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className={classes.searchWrapper}>
      <img
        src={googleLogo}
        alt="logo"
        width={props.mini ? '200px' : '300px'}
      />
      <div className={classes.searchMain}>
        <div className={classes.optionsGroup}>
          <a
            href="https://shalkauskas.com"
            rel="noreferrer"
            target="_blank"
          >
            Web
          </a>
          <b>Images</b>
          <a
            href="https://shalkauskas.com"
            rel="noreferrer"
            target="_blank"
          >
            Groups
          </a>
          <a
            href="https://shalkauskas.com"
            rel="noreferrer"
            target="_blank"
          >
            News
          </a>
          <a
            href="https://shalkauskas.com"
            rel="noreferrer"
            target="_blank"
          >
            Local
          </a>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            className={classes.input}
            value={searchText}
            onChange={handleChange}
          />
          <div>
            <button
              className={classes.searchButton}
              type="submit"
              value="search"
            >
              {props.mini ? `Search` : `Google Search`}
            </button>
            {!props.mini && (
              <button
                className={classes.searchButton}
                type="submit"
                value="search"
              >
                I'm Feeling Lucky
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
