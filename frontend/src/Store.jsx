import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  fullBox: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : { location: {} },
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FULLBOX_ON':
      return { ...state, fullBox: true };
    case 'SET_FULLBOX_OFF':
      return { ...state, fullBox: false };

    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id,
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item,
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id,
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CART_CLEAR':
      localStorage.removeItem('cartItems');
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case 'USER_SIGNIN':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return { ...state, userInfo: action.payload };

    case 'USER_SIGNOUT':
      localStorage.removeItem('userInfo');
      localStorage.removeItem('cartItems');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('paymentMethod');
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: '',
        },
      };

    case 'SAVE_SHIPPING_ADDRESS':
      localStorage.setItem('shippingAddress', JSON.stringify(action.payload));
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };

    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            location: action.payload,
          },
        },
      };

    case 'SAVE_PAYMENT_METHOD':
      localStorage.setItem('paymentMethod', action.payload);
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };

    case 'SET_CASH_ON_DELIVERY':
      localStorage.setItem('paymentMethod', 'CashOnDelivery');
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: 'CashOnDelivery' },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
