import React, { useRef } from 'react';

function SearchForm({ onSearch }) {
  const searchTerm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
        ref={searchTerm}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;
