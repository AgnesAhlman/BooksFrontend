import InputSearch from 'components/input/inputSearch';
import { getBooks } from 'lib/api';
import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaStar } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
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
        <h2 className={styles.p}> Search for title:</h2>
        <InputSearch setBookList={setBookList} />
        <div className={styles.bookContainer}>
          {bookList.map((book) => (
            <div className={styles.book} key={book.id}>
              <div className={styles.about}>
                <h3 key={book.id}>{book.title}</h3>
                <p>
                  <IoPeople /> {book.authors}
                </p>
                <p>
                  <FaBookOpen /> {book.num_pages}
                </p>
                <p>
                  <FaStar /> {Math.round(book.average_rating * 10) / 10}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllBooks;
