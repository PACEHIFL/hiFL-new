import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk("/auth/login", async ({ formData, toast }, { rejectWithValue }) => {
  try {
    const response = await api.signIn(formData);
    toast.success("Login Successfully");
    // router.push("/");
    return response.data;
  } catch (err) {
    toast.error(err.response.data.message);
    return rejectWithValue(err.response.data);
  }
});

export const register = createAsyncThunk("/auth/register", async ({ formData, toast }, { rejectWithValue }) => {
  try {
    const response = await api.register(formData);
    toast.success("Registration Successfull");
    // router.push("/");
    return response.data;
  } catch (err) {
    toast.error(err.response.data.message);
    return rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
