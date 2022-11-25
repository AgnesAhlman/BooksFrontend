import InputSearch from 'components/input/inputSearch';
import { getBooks } from 'lib/api';
import React, { useEffect, useState } from 'react';
import styles from './allBooks.module.css';

const AllBooks = () => {
  const [bookList, setBookList] = useState([]);
  console.log(bookList);

  const fetchBooks = () => {
    getBooks().then((data) => {
      setBookList(data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1> Books! </h1>
        <p className={styles.p}> Search for title:</p>
        <InputSearch setMovieList={setBookList} />
        <div className={styles.bookContainer}>
          {bookList.map((book) => (
            <div className={styles.book}>
              <p key={book.id}>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllBooks;
