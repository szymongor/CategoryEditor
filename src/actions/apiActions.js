import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export function fetchCategories() {
  const request = axios.get(`/categories`);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function createCategory(formFields) {
  let category = { category: formFields };
  const request = axios.post(`/categories`, category);
  return {
    type: CREATE_CATEGORY,
    payload: request
  };
}

export function updateCategory(categoryId, formFields) {
  let category = { category: formFields };
  const request = axios.put(`/categories/${categoryId}`, category);
  return {
    type: CREATE_CATEGORY,
    payload: request
  };
}
