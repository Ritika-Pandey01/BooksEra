import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {setHeaders, url} from './apiEndpoints';
import { toast } from 'react-toastify';
const initialState = {
  items: [],
  status: null,
  createStatus:null,
};

export const booksFetch = createAsyncThunk('books/booksFetch', async () => {
  try {
    const response = await axios.get(`${url}/books`);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const booksCreate = createAsyncThunk(
  'books/booksCreate',
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/books`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [booksFetch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [booksFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [booksFetch.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [booksCreate.pending]: (state, action) => {
      state.createStatus = 'pending';
    },
    [booksCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = 'success';
      toast.success('Book Created!');
    },
    [booksCreate.rejected]: (state, action) => {
      state.createStatus = 'rejected';
    },
  },
});
export default bookSlice.reducer;
