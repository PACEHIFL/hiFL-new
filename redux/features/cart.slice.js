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
      //if product already in cart, update quantity, size and customization details
      const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : "";
      const alreadyInCart = cartItems ? cartItems?.find((item) => item.ProductCode == action.payload.ProductCode) : "";
      const updItem = alreadyInCart
        ? cartItems?.map((item) =>
            item.ProductCode == action.payload.ProductCode
              ? {
                  ...item,
                  Quantity: item.Quantity + action.payload.Quantity,
                  Size: action.payload.Size,
                  Customization: {
                    ...item.Customization,
                    JerseyName: action.payload.Customization.JerseyName,
                    JerseyNumber: action.payload.Customization.JerseyNumber,
                  },
                }
              : item
          )
        : [action.payload, ...cartItems];
      localStorage.setItem("cart", JSON.stringify([...updItem]));
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
