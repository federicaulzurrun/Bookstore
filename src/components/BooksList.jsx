import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="booksListContainer">
      <div className="booksList">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
