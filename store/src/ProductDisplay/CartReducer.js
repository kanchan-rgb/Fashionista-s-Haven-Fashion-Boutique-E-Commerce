// const initialState = {
//   cart: [],
//   total_item: 0,
//   total_price: 0,
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return addToCart(state, action.payload);

//     case "SET_DECREMENT":
//       return setDecrement(state, action.payload);

//     case "SET_INCREMENT":
//       return setIncrement(state, action.payload);

//     case "REMOVE_ITEM":
//       return removeItem(state, action.payload);

//     case "CLEAR_CART":
//       return clearCart(state);

//     case "SET_CART_DATA":
//       return { ...state, cart: action.payload };

//     case "CART_TOTAL_ITEM":
//       return { ...state, total_item: calculateTotalItem(state.cart) };

//     case "CART_TOTAL_PRICE":
//       return { ...state, total_price: calculateTotalPrice(state.cart) };

//     default:
//       return state;
//   }
// };

// // Helper functions

// const addToCart = (state, payload) => {
//   const { id, size, amount, max } = payload;
//   const existingProduct = state.cart.find(item => item.id === id + size);

//   if (existingProduct) {
//     const updatedCart = state.cart.map(item =>
//       item.id === id + size
//         ? { ...item, amount: Math.min(item.amount + amount, max) }
//         : item
//     );
//     return { ...state, cart: updatedCart };
//   } else {
//     const newItem = {
//       id: id + size,
//       name: payload.name,
//       size,
//       amount: Math.min(amount, max),
//       image: payload.image,
//       price: payload.price,
//       max,
//     };
//     return { ...state, cart: [...state.cart, newItem] };
//   }
// };

// const setDecrement = (state, payload) => {
//   const updatedCart = state.cart.map(item =>
//     item.id === payload
//       ? { ...item, amount: Math.max(item.amount - 1, 1) }
//       : item
//   );
//   return { ...state, cart: updatedCart };
// };

// const setIncrement = (state, payload) => {
//   const updatedCart = state.cart.map(item =>
//     item.id === payload
//       ? { ...item, amount: Math.min(item.amount + 1, item.max) }
//       : item
//   );
//   return { ...state, cart: updatedCart };
// };

// const removeItem = (state, payload) => {
//   const updatedCart = state.cart.filter(item => item.id !== payload);
//   return { ...state, cart: updatedCart };
// };

// const clearCart = (state) => {
//   return { ...state, cart: [] };
// };

// const calculateTotalItem = (cart) => {
//   return cart.reduce((total, item) => total + item.amount, 0);
// };

// const calculateTotalPrice = (cart) => {
//   return cart.reduce((total, item) => total + item.price * item.amount, 0);
// };

// export default cartReducer;
