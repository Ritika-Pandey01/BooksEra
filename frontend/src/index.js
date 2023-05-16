import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import booksReducer, { booksFetch } from './features/booksSlice';
import { booksApi } from './features/booksApi';
import cartReducer, { getTotal } from './features/cartSlice';
import authReducer, { loadUser } from './features/authSlice';

/**
 * 
configureStore combines different reducers & automatically configures redux toolkits
slices contain the logic of a specific feature that logic will have reducers and actions
Provider binds react and redux together
 */

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    auth: authReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  //custom middleware adds more functionalities such as caching
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksApi.middleware);
  },
});
store.dispatch(booksFetch());
store.dispatch(getTotal());
store.dispatch(loadUser());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
