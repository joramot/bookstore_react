import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export default booksSlice.reducer;
