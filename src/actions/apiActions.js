import axios from 'axios';

export const API_GET_CATEGORIES = 'API_GET_CATEGORIES';
export const API_POST_CATEGORY = 'API_POST_CATEGORY';
export const API_PUT_CATEGORY = 'API_PUT_CATEGORY';
export const API_DELETE_CATEGORY = 'API_DELETE_CATEGORY';

export function getCategories() {
  const request = axios.get(`/categories`);
  return {
    type: API_GET_CATEGORIES,
    payload: request
  };
}

export function postCategory(categoryFields) {
  console.log('POST CATEGORY');
  let category = { category: categoryFields };
  const request = axios.post(`/categories`, category);
  return {
    type: API_POST_CATEGORY,
    payload: request
  };
}

export function putCategory(categoryId, categoryFields) {
  let category = { category: categoryFields };
  const request = axios.put(`/categories/${categoryId}`, category);
  return {
    type: API_PUT_CATEGORY,
    payload: request
  };
}

export function deleteCategory(categoryId) {
  const request = axios.delete(`/categories/${categoryId}`);
  return {
    type: API_DELETE_CATEGORY,
    payload: request
  };
}
