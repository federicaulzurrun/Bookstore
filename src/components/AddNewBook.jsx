import { v4 as uId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAsync, fetchBooks } from '../redux/books/booksSlice';
import '../style/AddNewBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      item_id: uId(),
      category: e.target.categories.value,
      title: e.target.title.value,
      author: e.target.author.value,
    };

    await dispatch(addBookAsync(data));

    dispatch(fetchBooks());

    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div className="new-book">
      <h3>Add a new book!</h3>
      <form className="frm-new-book" onSubmit={handleSubmit}>
        <input className="input" name="title" type="text" placeholder="Book title" />
        <input className="input" name="author" type="text" placeholder="Author Book" />
        <select className="input" id="categories">
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
        </select>
        <div className="addBookContainer">
          <button className="btn-submit" type="submit">
            Add book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
