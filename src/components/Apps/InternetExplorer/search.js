import React, { useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState();
  const { hideHomeLink = 'normal' } = props;
  // we add a function to handle the submission of the search form
  const handleSubmit = (e) => {
    e.preventDefault();
    const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        props.updateParentState(response.data);
      });
    setSearchText('');
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
    // console.log(`the current search text is ${searchText}`)
  };
  return (
    <div className="search">
      {hideHomeLink ? null : (
        <a className="home-link" href="/">
          Home
        </a>
      )}
      <form
        id="search-form"
        className="search-form form"
        onSubmit={handleSubmit}
      >
        <input
          className="input __text"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="search-button"
          type="submit"
          value="search"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
