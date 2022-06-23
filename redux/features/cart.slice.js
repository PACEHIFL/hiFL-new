import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const placeOrder = createAsyncThunk(
  "/store/orders/create",
  async ({ payload, toast, router }, { rejectWithValue }) => {
    try {
      const response = await api.createOrder(payload);
      toast.success("Order was successfully placed", {
        onClose: () => router.push("/account?tab=store"),
        autoClose: 2000,
      });
      return response.data;
    } catch (err) {
      toast.error(err.response.statusText);
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchOrders = createAsyncThunk("/store/orders", async ({ userId, setOrders }, { rejectWithValue }) => {
  try {
    const response = await api.getOrders(userId);
    setOrders(response.data);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

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
    loading: false,
    ordersLoading: false,
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

  extraReducers: {
    [placeOrder.pending]: (state) => {
      state.loading = true;
    },
    [placeOrder.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.removeItem("cart");
      state.cart = null;
    },
    [placeOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchOrders.pending]: (state) => {
      state.ordersLoading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.ordersLoading = false;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.ordersLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addToCart, increaseQty, reduceQty, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
