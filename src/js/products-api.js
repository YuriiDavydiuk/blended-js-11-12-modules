import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/docs/products';

export async function getCategories() {
  const { data } = await axios.get('/category-list');
  const res = ['ALL', ...data];

  
  return res;

}
