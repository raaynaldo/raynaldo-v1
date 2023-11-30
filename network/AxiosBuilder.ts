import axios, { AxiosInstance } from 'axios';

const appRouterAxios: AxiosInstance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const devToAxios: AxiosInstance = axios.create({
  baseURL: 'https://dev.to/api/',
});

devToAxios.interceptors.request.use((config) => {
  config.headers['api-key'] = process.env.DEVTO_API_KEY;
  return config;
});

export { appRouterAxios, devToAxios };
