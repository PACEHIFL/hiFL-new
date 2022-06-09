import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth.slice";
import volunteerReducer from "./features/volunteer.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    volunteer: volunteerReducer,
  },
});
