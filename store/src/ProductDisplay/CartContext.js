import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

// Define the initial state for the cart
const initialState = {
  cart: [],
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};

// Define the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);

    case "SET_DECREMENT":
      return setDecrement(state, action.payload);

    case "SET_INCREMENT":
      return setIncrement(state, action.payload);

    case "REMOVE_ITEM":
      return removeItem(state, action.payload);

    case "CLEAR_CART":
      return clearCart(state);

    case "SET_CART_DATA":
      const newData = action.payload;
      // Merge the new data with the existing data, ensuring uniqueness based on the item id
      const mergedCart = [...state.cart];
      newData.forEach(newItem => {
        if (!mergedCart.some(existingItem => existingItem.id === newItem.id)) {
          mergedCart.push(newItem);
        }
      });
      return { ...state, cart: mergedCart, isDataFetched: true };

    case "CART_TOTAL_ITEM":
      return { ...state, total_item: calculateTotalItem(state.cart) };

    case "CART_TOTAL_PRICE":
      return { ...state, total_price: calculateTotalPrice(state.cart) };

    default:
      return state;
  }
};

// Create CartContext
const CartContext = createContext();

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isDataFetched, setIsDataFetched] = useState(false); // New state variable

  // Function to add item to cart
  const addToCart = async (userid, p_id, size, amount, name, image,imagelink, price, category) => {
    try {
      const response = await axios.post("http://localhost:5050/cart/adddata", {
        userid,
        p_id,
        size,
        amount,
        image,
        imagelink,
        name,
        price,
        category
      });
      dispatch({ type: "ADD_TO_CART", payload: response.data });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Function to remove item from cart
  const removeItem = async (itemId) => {
    try {
      // Add logic to remove item from cart
      await axios.delete(`http://localhost:5050/cart/deleteCart/${itemId}`);
      // Fetch updated cart items after removing
      window.location.reload();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Function to decrease item quantity in cart
  const setDecrease = async (itemId) => {
    try {
      // Add logic to decrease item quantity in cart
      // For example:
      // await axios.put(`http://localhost:5050/cart/update/${itemId}`, { quantity: newQuantity });
      // Then fetch updated cart items
      // fetchCartItems();
    } catch (error) {
      console.error("Error decreasing item quantity:", error);
    }
  };

  // Function to increase item quantity in cart
  const setIncrease = async (itemId) => {
    try {
      // Add logic to increase item quantity in cart
      // For example:
      // await axios.put(`http://localhost:5050/cart/update/${itemId}`, { quantity: newQuantity });
      // Then fetch updated cart items
      // fetchCartItems();
    } catch (error) {
      console.error("Error increasing item quantity:", error);
    }
  };

  // Function to fetch cart data
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = sessionStorage.getItem("user");
        const response = await axios.get(`http://localhost:5050/cart/getcartbyuserid/${userId}`);
        dispatch({ type: "SET_CART_DATA", payload: response.data });
        setIsDataFetched(true); // Set data fetched to true after successful fetch
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    // Fetch data only if it hasn't been fetched before
    if (!isDataFetched) {
      fetchCartData();
    }
  }, [isDataFetched]);

  // Calculate total item count and total price whenever cart data changes
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  }, [state.cart]);

  // Function to fetch updated cart items
  // const fetchCartItems = async () => {
  //   try {
  //     const userId = sessionStorage.getItem("user");
  //     const response = await axios.get(`http://localhost:5050/cart/getcartbyuserid/${userId}`);
  //     dispatch({ type: "SET_CART_DATA", payload: response.data });
  //   } catch (error) {
  //     console.error("Error fetching cart data:", error);
  //   }
  // };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, setDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the CartContext
const useCartContext = () => {
  return useContext(CartContext);
};

// Helper functions
const addToCart = (state, payload) => {
  const { id, size, amount, max } = payload;
  const existingProduct = state.cart.find(item => item.id === id + size);

  if (existingProduct) {
    const updatedCart = state.cart.map(item =>
      item.id === id + size
        ? { ...item, amount: Math.min(item.amount + amount, max) }
        : item
    );
    return { ...state, cart: updatedCart };
  } else {
    const newItem = {
      id: id + size,
      name: payload.name,
      size,
      amount: Math.min(amount, max),
      image: payload.image,
      price: payload.price,
      max,
    };
    return { ...state, cart: [...state.cart, newItem] };
  }
};

const setDecrement = (state, payload) => {
  const updatedCart = state.cart.map(item =>
    item.id === payload
      ? { ...item, amount: Math.max(item.amount - 1, 1) }
      : item
  );
  return { ...state, cart: updatedCart };
};

const setIncrement = (state, payload) => {
  const updatedCart = state.cart.map(item =>
    item.id === payload
      ? { ...item, amount: Math.min(item.amount + 1, item.max) }
      : item
  );
  return { ...state, cart: updatedCart };
};

const removeItem = (state, payload) => {
  const updatedCart = state.cart.filter(item => item.id !== payload);
  return { ...state, cart: updatedCart };
};

const clearCart = (state) => {
  return { ...state, cart: [] };
};

const calculateTotalItem = (cart) => {
  return cart.reduce((total, item) => total + item.amount, 0);
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.amount, 0);
};

export { CartProvider, useCartContext };
