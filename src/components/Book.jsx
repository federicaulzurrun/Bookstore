/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';

const Book = ({ data }) => {
  const {
    item_id,
    category,
    title,
    author,
  } = data;
  const dispatch = useDispatch();
  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync(data.item_id));
  };

  return (
    <div className="flexRow bookContainer">
      <div className="bookData">
        <h4 className="genre">{category}</h4>
        <h3 className="title">{title}</h3>
        <h4 className="author">{author}</h4>
        <button type="button" className="autorBook itemBts">Comments</button>
        <button type="button" className="autorBook itemBts removeBtn edit" onClick={() => handleRemoveBook(item_id)}>
          Remove
        </button>
        <button type="button" className="autorBook itemBts edit">Edit</button>
      </div>
      <div className="flexRow circleCont">
        <div className="progressCircle"> </div>
        <div className="completedContainer">
          <p className="percentage">80%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="contChap">
        <h5 className="currentC">Current Chapter</h5>
        <p className="chapter">Chapter 7</p>
        <button type="button" className="autorBook itemBts updateBtn">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
