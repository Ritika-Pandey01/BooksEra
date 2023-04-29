import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
