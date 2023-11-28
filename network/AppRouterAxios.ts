import axios, { AxiosInstance } from 'axios';

const AppRouterAxios: AxiosInstance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AppRouterAxios;
