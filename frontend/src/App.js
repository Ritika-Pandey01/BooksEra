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
import Admindashboard from './components/admin/Admindashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import CreateProducts from './components/admin/CreateProducts';
import Bestseller from './components/Bestseller';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bestseller" element={<Bestseller/>} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Nesting routes for admin dashboard*/}
          <Route path="/admin" element={<Admindashboard />} >
            <Route path="summary" element={<Summary/>} />
            <Route path="books" element={<Products />} >
              <Route path="create-products" element={<CreateProducts />}/>
            </Route>
          </Route>
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
