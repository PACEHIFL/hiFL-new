import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const contactUs = createAsyncThunk(
  "/contact-requests",
  async ({ payload, toast, setContactData, initialContact }, { rejectWithValue }) => {
    try {
      const response = await api.contact(payload);
      toast.success("Message sent successfully");
      setContactData(initialContact);
      return response.data;
    } catch (err) {
      toast.error(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);
export const subscribe = createAsyncThunk(
  "/mailing-lists",
  async ({ payload, toast, setSubscribeData, initialSubscribe }, { rejectWithValue }) => {
    try {
      const response = await api.mailSubscribe(payload);
      toast.success("Successfully subscribed");
      setSubscribeData(initialSubscribe);
      return response.data;
    } catch (err) {
      toast.error(err.response.data.error.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    error: "",
    loading: false,
    subscribeLoading: false,
  },

  reducers: {},

  extraReducers: {
    [contactUs.pending]: (state) => {
      state.loading = true;
    },
    [contactUs.fulfilled]: (state) => {
      state.loading = false;
    },
    [contactUs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [subscribe.pending]: (state) => {
      state.subscribeLoading = true;
    },
    [subscribe.fulfilled]: (state) => {
      state.subscribeLoading = false;
    },
    [subscribe.rejected]: (state, action) => {
      state.subscribeLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactSlice.reducer;
