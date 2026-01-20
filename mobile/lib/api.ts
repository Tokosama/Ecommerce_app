import axios from "axios";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useApi = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const interceptor = api.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    //cleanup :remove interceptor when component unmounts
    return () => {
      api.interceptors.request.eject(interceptor);
    };
  }, [getToken]);
  return api;
};

//on every req,we would like to have an auth token, to allow the backend to check the auth
// we're including the auth token unde the auth headers
