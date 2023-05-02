import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { url } from './apiEndpoints';
const initialState = {
  token: localStorage.getItem('token'),
  name: '',
  email: '',
  _id: '',
  isAdmin:'',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/signup`, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      //we store the token in localstorage
      localStorage.setItem('token', token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem('token', token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin:user.isAdmin,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    logoutUser(state, action) {
      localStorage.removeItem('token');

      return {
        ...state,
        token: '',
        name: '',
        email: '',
        _id: '',
        isAdmin:false,
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    //we mention here all the http request
    builder.addCase(signupUser.pending, (state, action) => {
      return { ...state, registerStatus: 'pending' };
    });

    builder.addCase(signupUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin:user.isAdmin,
          registerStatus: 'success',
        };
      } else {
        return state;
      }
    });

    builder.addCase(signupUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: 'rejected',
        registerError: action.payload,
      };
    });

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: 'pending' };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        //if token exists we decode the token
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin:user.isAdmin,
          loginStatus: 'success',
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: 'rejected',
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
