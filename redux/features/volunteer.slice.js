import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const register = createAsyncThunk("volunteers/signup", async ({ payload, toast }, { rejectWithValue }) => {
  try {
    const response = await api.registerVolunteer(payload);
    toast.success("Application Successful");
    return response.data;
  } catch (err) {
    toast.error(err.response.data.message);
    return rejectWithValue(err.response.data);
  }
});

//RETURN VOLUNTEER OBJECT IF USER HAS APPLIED
export const isVolunteer = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("volunteer")) {
    return JSON.parse(localStorage.getItem("volunteer"));
  }
  return false;
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("volunteer", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, logout } = volunteerSlice.actions;

export default volunteerSlice.reducer;
