import {
  RECEIVED_CATEGORIES,
  SELECT_CURRENT_CATEGORY
} from '../actions/appActions';

const INITIAL_STATE = { categories: [], categoriesTree: {}, currentNode: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVED_CATEGORIES:
      return { ...state, ...action.payload.state };
    case SELECT_CURRENT_CATEGORY:
      return {
        ...state,
        currentNode: action.payload
      };
    default:
      return state;
  }
}
