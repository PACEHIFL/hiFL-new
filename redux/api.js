import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`;
  return req;
});

export const signIn = (formData) => API.post("/auth/login", formData);

export const register = (formData) => API.post("/auth/register", formData);
