import axios from 'axios';

const devtoAxios = axios.create({
  baseURL: 'https://dev.to/api/',
});

devtoAxios.interceptors.request.use((config) => {
  config.headers['api-key'] = process.env.DEVTO_API_KEY;
  return config;
});

export async function getArticles() {
  const result = await devtoAxios.get('articles/me');
  return result.data;
}
