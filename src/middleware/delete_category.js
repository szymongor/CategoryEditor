import {
  selectCurrentCategory,
  fetchCategories,
  DELETE_CATEGORY
} from '../actions/app_actions';
import { deleteCategory, API_DELETE_CATEGORY } from '../actions/api_actions';

const validate = store => next => action => {
  if (action.type === DELETE_CATEGORY) {
    let currentCategory = action.payload.category;
    if (currentCategory.parent_id === null) {
      console.log('ROOT can not be deleted');
      action.payload.isRemovable = false;
    } else {
      action.payload.isRemovable = true;
    }
  }
  let result = next(action);
  return result;
};

const deleteRouter = store => next => action => {
  if (action.type === DELETE_CATEGORY) {
    if (action.payload.isRemovable) {
      store.dispatch(selectCurrentCategory(action.payload.category.parent_id));
      store.dispatch(deleteCategory(action.payload.category.id));
    }
  }
  let result = next(action);
  return result;
};

const deleteSuccess = store => next => action => {
  if (action.type === API_DELETE_CATEGORY) {
    if (action.payload.status === 200) {
      store.dispatch(fetchCategories());
    }
  }
  let result = next(action);
  return result;
};

const deleteCategoryMDL = [validate, deleteRouter, deleteSuccess];
export default deleteCategoryMDL;
