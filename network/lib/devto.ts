import { devToAxios } from '@/network/AxiosBuilder';

export async function getArticles() {
  const result = await devToAxios.get('articles/me');
  return result.data;
}
