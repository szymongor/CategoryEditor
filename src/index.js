import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import App from './App';
import validationMDL from './middleware/form_validation';
import createCategoryMDL from './middleware/create_category';
import updateCategoryMDL from './middleware/update_category';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import reducers from './reducers';
//import routes from './routes';
//import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(
  promise,
  ...validationMDL,
  ...createCategoryMDL,
  ...updateCategoryMDL
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
