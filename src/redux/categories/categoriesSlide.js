import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      categories: ['...to be defined'],
    }),
  },
});

export default categoriesSlice.reducer;
