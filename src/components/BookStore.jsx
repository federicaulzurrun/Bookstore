import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddNewBook';

const BookStore = () => (
  <>
    <div>
      <BooksList />
      <AddBook />
    </div>
  </>
);

export default BookStore;
