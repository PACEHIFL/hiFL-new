import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).data.accessToken}`;
  }
  return req;
});

export const signIn = (formData) => API.post("/auth/login", formData);
export const register = (formData) => API.post("/auth/register", formData);
export const update = (formData) => API.patch("/auth/update-profile", formData);
export const registerVolunteer = (formData) => API.patch("/volunteers/signup", formData);
