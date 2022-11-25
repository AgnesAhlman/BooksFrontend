/* eslint-disable react/jsx-closing-bracket-location */
import { getBooksByTitle } from 'lib/api';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './input.module.css';

const InputSearch = (props) => {
  const [bookInputSearch, setBookInputSearch] = useState('');
  console.log(bookInputSearch);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    getBooksByTitle(title).then((data) => props.setBookList(data));
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="movie-input">
        <input
          className={styles.input}
          placeholder="Search for title"
          id="movie-input"
          name="title"
          type="text"
          value={bookInputSearch}
          onChange={(event) => setBookInputSearch(event.target.value)}
        />
      </label>
      <button type="submit">
        {' '}
        <FaSearch />{' '}
      </button>
    </form>
  );
};

export default InputSearch;
