import { putCategory, API_PUT_CATEGORY } from '../actions/apiActions';
import {
  changeMode,
  fetchCategories,
  UPDATE_CATEGORY,
  CATEGORY_VIEW_MODE
} from '../actions/appActions';

const categoryIdEnricher = store => next => action => {
  if (action.type === UPDATE_CATEGORY) {
    action.payload.current_id = store.getState().categories.currentNode;
  }
  let result = next(action);

  return result;
};

const updateCategoryRouter = store => next => action => {
  if (action.type === UPDATE_CATEGORY) {
    store.dispatch(
      putCategory(action.payload.current_id, action.payload.formFields)
    );
  }
  let result = next(action);

  return result;
};

const updatingSucces = store => next => action => {
  if (action.type === API_PUT_CATEGORY) {
    if (action.payload.status === 200) {
      store.dispatch(fetchCategories());
      store.dispatch(changeMode(CATEGORY_VIEW_MODE));
    }
  }
  let result = next(action);

  return result;
};

const updateCategoryMDL = [
  categoryIdEnricher,
  updateCategoryRouter,
  updatingSucces
];
export default updateCategoryMDL;
