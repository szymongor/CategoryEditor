import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export function fetchCategories() {
  const request = axios.get(`/categories`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function createCategory(category) {
  const request = axios.post(`/categories`, category);
  return {
    type: CREATE_CATEGORY,
    payload: request
  };
}
