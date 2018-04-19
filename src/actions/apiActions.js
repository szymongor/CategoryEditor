import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SELECT_CURRENT_CATEGORY = 'SELECT_CURRENT_CATEGORY';

export function fetchCategories() {
  const request = axios.get(`/categories`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function selectCurrentCategory(categoryId) {
  return {
    type: SELECT_CURRENT_CATEGORY,
    payload: categoryId
  };
}
