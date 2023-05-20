import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync, fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import '../style/Book.css';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const handleRemoveBook = async (bookId) => {
    await dispatch(removeBookAsync(bookId));
  };
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.key}
          data={book}
          id={book.key}
          author={book.author}
          title={book.title}
          category={book.category}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </>
  );
};
export default BooksList;
