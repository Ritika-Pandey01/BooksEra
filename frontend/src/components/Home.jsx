import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const Home = () => {
  const { items: data, status } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
    navigate('/cart');
  };

  return (
    <div className="home-container">
      {status === 'success' ? (
        <>
          <h2>New Arrivals</h2>
          <div className="books">
            {data &&
              data?.map((book) => (
                <div key={book._id} className="book">
                  <h3>{book.title}</h3>
                  <img src={book.image.url} alt={book.title}></img>
                  <div className="details">
                    <span className="author">Author: {book.author}</span>
                    <span className="genre">Genre: {book.genre}</span>
                    <span className="price">₹{book.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleAddToCart(book);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === 'pending' ? (
        <p>Loading...</p>
      ) : (
        <p>An unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
