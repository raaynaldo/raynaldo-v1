import { appRouterAxios } from '@/network/AxiosBuilder';

export function getBlogs() {
  return appRouterAxios.get('/api/blogs');
}
