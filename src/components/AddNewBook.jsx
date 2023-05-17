import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
  });
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };
  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: bookData.title,
      author: bookData.author,
      category: bookData.category,
    };
    dispatch(addBook(newBook));
    setBookData({ title: '', author: '', genre: '' });
  };
  return (
    <>
      <div className="form-container">
        <h2>Add a new Book</h2>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={bookData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author..."
            value={bookData.author}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={bookData.category}
            onChange={handleChange}
            required
          >
            <option value="select" hidden>Select a Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
            <option value="Mistery">Mistery</option>
            <option value="Romance">Romance</option>
          </select>
          <button type="submit">Add book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
