import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //Slice to add item to the cart
    addToCart(state, action) {
      //we will check through this itemIndex if the item is present in the cart or not
      //accordingly we will increase the quantity or add new product
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        //we are checking if the item is present accessing it's index and increasing quantity
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${action.payload.title} quantity increased`, {
          position: 'bottom-left',
        });
      } else {
        const tempBook = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempBook);
        toast.success(`${action.payload.title} added`, {
          position: 'bottom-left',
        });
      }
      /**To add the items to local storage in the form of key value pairs*/
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    //Slice to remove item from cart
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error('Book removed from cart', {
            position: 'bottom-left',
          });
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        return state;
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`${action.payload.title} quantity decreased`, {
          position: 'bottom-left',
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error('Product removed from cart', {
          position: 'bottom-left',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    //Clear the cart
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      toast.error('Cart is empty', { position: 'bottom-left' });
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          //Initial values of the total and quantity of the books
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
