import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { logoutUser } from '../features/authSlice';

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to="/">
        <h3>BooksEra</h3>
      </Link>
      <Link to="/sustain">Sustainable</Link>
      <Link to="/sustain">BestSellers</Link>
      <Link to="/contact">Contact Us</Link>
      {auth._id ? (
        <Logout
          onClick={() => {
            dispatch(logoutUser(null));
            toast.warning('You have logged out!', { position: 'bottom-left' });
          }}
        >
          Logout
        </Logout>
      ) : (
        <AuthLinks>
          <Link to="/login">Login / </Link>
          <Link to="/signup">Signup</Link>
        </AuthLinks>
      )}
      <Link to="/cart">
        <div className="navbag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;

const AuthLinks = styled.div`
  a {
    &:last-child {
    }
  }
`;

const Logout = styled.div`
  color: white;

  cursor: pointer;
`;
