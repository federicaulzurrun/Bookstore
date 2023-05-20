import { v4 as uId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAsync, fetchBooks } from '../redux/books/booksSlice';

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
      <p>Add a new book!</p>
      <form className="frm-new-book" onSubmit={handleSubmit}>
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
