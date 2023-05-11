import { PropTypes } from 'prop-types';
import '../style/Book.css';

const Book = ({
  title, author, genre, progress, chapter,
}) => (
  <>
    <div className="bookContainer">
      <div>
        <h4 className="genre">{genre}</h4>
        <h3 className="title">{title}</h3>
        <h4 className="author">{author}</h4>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <h5>{progress}</h5>
      <div>
        <h5>{chapter}</h5>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
