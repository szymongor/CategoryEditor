import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import AppStateReducer from './reducer_app';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  appState: AppStateReducer
});

export default rootReducer;
