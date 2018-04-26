import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './App';
import validationMDL from './middleware/form_validation';
import createCategoryMDL from './middleware/create_category';
import updateCategoryMDL from './middleware/update_category';
import deleteCategoryMDL from './middleware/delete_category';
import fetchCategoriesMDL from './middleware/fetch_categories';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise,
  ...validationMDL,
  ...createCategoryMDL,
  ...updateCategoryMDL,
  ...deleteCategoryMDL,
  ...fetchCategoriesMDL
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
