import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
  error: null,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wdqc1xKIWcb9e5ljNxvD/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const res = await axios(url);
    const books = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return books;
  } catch (error) {
    console.log(error);
  }
  return null;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const res = await axios.post(url, book);
    console.log(res.data);
    return book;
  } catch (error) {
    console.log(error);
  }
  return null;
});

export const removeBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const res = await axios.delete(`${url}/${id}`);
    console.log(res.data);
    return id;
  } catch (error) {
    console.log(error);
  }
  return null;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
