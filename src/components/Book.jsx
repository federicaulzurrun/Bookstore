import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../style/Book.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  const removeBooks = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="bookContainer">
        <div>
          <h4 className="genre">{category}</h4>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => {
              removeBooks(id);
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
        <div>
          <h5>Progress</h5>
          <p>50%</p>
          <p>Completed</p>
        </div>
        <div>
          <h5>Current Chapter</h5>
          <p> Chapter 7</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
