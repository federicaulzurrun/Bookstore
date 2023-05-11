import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add a new book</h2>
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="author" />
      <select id="genre">
        <option value="" hidden>Select a Genre</option>
        <option value="genre-1">Fiction</option>
        <option value="genre-2">Romance</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
