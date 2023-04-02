import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../features/authSlice';
import { StyledForm } from './StyledForm';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    if (auth._id) {
      navigate('/cart');
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: '',
    emai: '',
    password: '',
  });

  console.log('User: ', user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(user));
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button>
          {auth.rigisterStatus === 'pending' ? 'Submitting...' : 'Sign Up'}
        </button>
        {auth.registerStatus === 'rejected' ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </>
  );
};

export default SignUp;
