import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Add a book to the API
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
// Remove a book from the API
export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (bookId) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XKwjcPWtaWq6gTno4u9E/books/${bookId}`);
  return bookId;
});
const initialState = {
  books: [],
  isLoading: true,
  isError: null,
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XKwjcPWtaWq6gTno4u9E/books');
  const books = Object.entries(response.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const bookIndex = state.books.findIndex((book) => book.item_id === action.payload);
        if (bookIndex !== -1) {
          state.books.splice(bookIndex, 1);
        }
      })
      .addCase(removeBookAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
