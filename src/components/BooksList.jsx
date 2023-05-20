import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import Book from './Book';
import '../style/Book.css';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = async (bookId) => {
    await dispatch(removeBookAsync(bookId));
  };

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.key}
          itemId={book.key}
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
