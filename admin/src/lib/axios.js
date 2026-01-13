import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: import.meta.env.VITE_API_UURL,
  withCredentials: true, // send cooking automatically,
});


export default axiosInstance