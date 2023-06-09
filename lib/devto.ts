import axios from 'axios';

const devtoAxios = axios.create({
  baseURL: 'https://dev.to/api/',
});

devtoAxios.interceptors.request.use((config) => {
  config.headers['api-key'] = 'zqfMzkkNfKyQtwyB7yrX9Szi';
  return config;
});

export async function getArticles() {
  const result = await devtoAxios.get('articles/me');
  console.log(result);
  return result.data;
}
