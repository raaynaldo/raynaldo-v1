import AppRouterAxios from '@/network/AppRouterAxios';

export function getBlogs() {
  return AppRouterAxios.get('/api/blogs');
}
