import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const clientAxios = axios.create({
  baseURL: "https://localhost:44359/api",
});

clientAxios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJqbWVyY2FkbyIsImdpdmVuX25hbWUiOiJqc2Rhc2RjZmdXRVJDc2RmJGRkZmRmZ2RmZ2RmZyEyMzQwIiwicm9sZSI6InBvc3RtYW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiInMjQvMDQvMjAyNSAxNDo1MTo0OCciLCJuYmYiOjE3MTM5NzAzMDgsImV4cCI6MTc0NTUwNjMwOCwiaWF0IjoxNzEzOTcwMzA4fQ.PTyyun-rtnuOGmS3yhb7k8aUZvQeTtfGPVbclS2gxXY`,
  };
  return config;
});

export default clientAxios;
