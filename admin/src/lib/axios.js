import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_UURL,
  withCredentials: true, // send cooking automatically,
});


export default axiosInstance