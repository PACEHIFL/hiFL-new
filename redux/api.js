import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });
const CMSAPI = axios.create({ baseURL: process.env.CMS_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).data.accessToken}`;
  }
  return req;
});

export const signIn = (formData) => API.post("/auth/login", formData);
export const register = (formData) => API.post("/auth/register", formData);
export const update = (formData) => API.patch("/auth/user/update-profile", formData);
export const registerVolunteer = (formData) => API.post("/volunteers/signup", formData);
export const createOrder = (formData) => API.post("/store/orders/create", formData);
export const getOrders = (userId) => API.get(`/store/orders?User=${userId}`);
export const contact = (formData) => CMSAPI.post("/contact-requests", formData);
export const mailSubscribe = (formData) => CMSAPI.post("/mailing-lists", formData);
