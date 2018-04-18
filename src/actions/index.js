import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  const request = axios.get(`/categories`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}
