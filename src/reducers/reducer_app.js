import { CHANGE_MODE, CATEGORY_VIEW_MODE } from '../actions/app_actions';

const INITIAL_STATE = { eastPanelMode: CATEGORY_VIEW_MODE };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, eastPanelMode: action.payload };
    default:
      return state;
  }
}
