export const CHANGE_MODE = 'CHANGE_MODE';
export const SELECT_CURRENT_CATEGORY = 'SELECT_CURRENT_CATEGORY';
export const SUBMIT_ADD_FORM = 'SUBMIT_ADD_FORM';
export const SUBMIT_EDIT_FORM = 'SUBMIT_EDIT_FORM';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
//East Panel modes:
export const CATEGORY_VIEW_MODE = 'CATEGORY_VIEW_MODE';
export const CATEGORY_EDIT_MODE = 'CATEGORY_EDIT_MODE';
export const CATEGORY_NEW_MODE = 'CATEGORY_NEW_MODE';

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: mode
  };
}

export function selectCurrentCategory(categoryId) {
  return {
    type: SELECT_CURRENT_CATEGORY,
    payload: categoryId
  };
}

export function submitAddForm(formFields) {
  return {
    type: SUBMIT_ADD_FORM,
    payload: {
      formFields: formFields
    }
  };
}

export function submitEditForm(formFields) {
  return {
    type: SUBMIT_EDIT_FORM,
    payload: {
      formFields: formFields
    }
  };
}

export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES
  };
}

export function receivedCategories(categories) {
  return {
    type: RECEIVED_CATEGORIES,
    payload: categories
  };
}

export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    payload: category
  };
}

export function updateCategory(category) {
  return {
    type: UPDATE_CATEGORY,
    payload: category
  };
}

export function deleteCategory(category) {
  return {
    type: DELETE_CATEGORY,
    payload: {
      category: category
    }
  };
}
