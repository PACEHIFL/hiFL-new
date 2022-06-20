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
      state.cart = JSON.parse(localStorage.getItem("cart"));
    },
    increaseQty: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.map((item) =>
        item.ProductCode == action.payload.ProductCode ? { ...item, Quantity: item.Quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify([...updItem]));
    },
    reduceQty: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.map((item) =>
        item.ProductCode == action.payload.ProductCode ? { ...item, Quantity: item.Quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify([...updItem]));
    },
    deleteFromCart: (state, action) => {
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const updItem = cartItems?.filter((item) => item.ProductCode !== action.payload.ProductCode);
      localStorage.setItem("cart", JSON.stringify([...updItem]));
      state.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
});

export const { addToCart, increaseQty, reduceQty, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// const updateFeedback = (id, updItem) => {
//   setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
// };
