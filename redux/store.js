import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth.slice";
import volunteerReducer from "./features/volunteer.slice";
import cartReducer from "./features/cart.slice";
import contactReducer from "./features/contact.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    volunteer: volunteerReducer,
    cart: cartReducer,
    contact: contactReducer,
  },
});
