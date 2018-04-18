import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
  categories: CategoriesReducer
});

export default rootReducer;
