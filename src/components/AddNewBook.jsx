// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uId } from 'uuid';

// Define the async thunk action to add a book
export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async (newBook) => {
    const response = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XKwjcPWtaWq6gTno4u9E/books',
      newBook,
    );
    return response.data;
  },
);

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dato = {
      item_id: uId(),
      category: e.target.categories.value,
      title: e.target.title.value,
      author: e.target.author.value,
    };
    dispatch(addBookAsync(dato));
    e.target.title.value = '';
    e.target.author.value = '';
  };
  // const dispatch = useDispatch();
  // const [bookData, setBookData] = useState({
  //   title: '',
  //   author: '',
  //   category: '',
  // });
  // const handleChange = (e) => {
  //   setBookData({ ...bookData, [e.target.name]: e.target.value });
  // };
  // const handleAddBook = (e) => {
  //   e.preventDefault();
  //   const newBook = {
  //     item_id: uId(),
  //     title: bookData.title,
  //     author: bookData.author,
  //     category: bookData.category,
  //   };
  //   dispatch(addBookAsync(newBook));
  //   setBookData({
  //     id: '', title: '', author: '', category: '',
  //   });
  // };
  return (
    <div className="new-book">
      <p>ADD NEW BOOK</p>
      <form className="frm-new-book" onSubmit={(e) => handleSubmit(e)}>
        <input name="title" type="text" placeholder="Book title" />
        <input name="author" type="text" placeholder="Author Book" />
        <select id="categories">
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
