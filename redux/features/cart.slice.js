import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//RETURN CART ARRAY
export const getCart = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return false;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
  },

  reducers: {
    addToCart: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      localStorage.setItem("cart", JSON.stringify([...cartItems, action.payload]));
      state.cart = action.payload;
    },
    increaseQty: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.map((item) =>
        item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify([...updItem]));
    },
    reduceQty: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.map((item) =>
        item.id == action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify([...updItem]));
    },
    deleteFromCart: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify([...updItem]));
    },
  },
});

export const { addToCart, increaseQty, reduceQty, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// const updateFeedback = (id, updItem) => {
//   setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
// };
