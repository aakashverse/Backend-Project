import axios from "axios";
const APIURL = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: `${APIURL}/api/v1`,
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;