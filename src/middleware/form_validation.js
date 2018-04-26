import {
  createCategory,
  updateCategory,
  SUBMIT_ADD_FORM,
  SUBMIT_EDIT_FORM
} from '../actions/appActions';

const categoryValidation = store => next => action => {
  if (action.type === SUBMIT_ADD_FORM || action.type === SUBMIT_EDIT_FORM) {
    if (action.payload.formFields.name === '') {
      action.payload.validation = {
        status: 'FAILED',
        msg: 'Please fill name field'
      };
    } else {
      action.payload.validation = {
        status: 'SUCCESS'
      };
    }
  }
  let result = next(action);

  return result;
};

const validationRouting = store => next => action => {
  if (action.type === SUBMIT_ADD_FORM || action.type === SUBMIT_EDIT_FORM) {
    if (action.payload.validation.status === 'FAILED') {
      //store.dispatch(formValidationFailed(...))
    } else if (action.payload.validation.status === 'SUCCESS') {
      switch (action.type) {
        case SUBMIT_ADD_FORM:
          store.dispatch(createCategory(action.payload.formFields));
          break;
        case SUBMIT_EDIT_FORM:
          store.dispatch(updateCategory(action.payload));
          break;
        default:
          break;
      }
    }
  }

  let result = next(action);
  return result;
};

const validationMDL = [categoryValidation, validationRouting];
export default validationMDL;
