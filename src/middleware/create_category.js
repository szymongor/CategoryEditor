import {
  postCategory,
  getCategories,
  API_POST_CATEGORY
} from '../actions/apiActions';
import {
  changeMode,
  selectCurrentCategory,
  CATEGORY_VIEW_MODE,
  CREATE_CATEGORY
} from '../actions/appActions';

const parentIdEnricher = store => next => action => {
  if (action.type === CREATE_CATEGORY) {
    action.payload['parent_id'] = store.getState().categories.currentNode;
  }
  let result = next(action);

  return result;
};

const createCategoryRouter = store => next => action => {
  if (action.type === CREATE_CATEGORY) {
    store.dispatch(postCategory(action.payload));
  }
  let result = next(action);

  return result;
};

const creatingSucces = store => next => action => {
  if (action.type === API_POST_CATEGORY) {
    console.log(action.payload.data);
    if (action.payload.status === 200) {
      //store.dispatch(selectCurrentCategory(newCategoryId));
      store.dispatch(changeMode(CATEGORY_VIEW_MODE));
      store.dispatch(getCategories());
    }
  }
  let result = next(action);

  return result;
};

const createCategoryMDL = [
  parentIdEnricher,
  createCategoryRouter,
  creatingSucces
];
export default createCategoryMDL;
