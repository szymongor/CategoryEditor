import { CHANGE_MODE } from '../actions/appActions';

import { CATEGORY_VIEW_MODE } from '../actions/appActions';

const INITIAL_STATE = { eastPanelMode: CATEGORY_VIEW_MODE };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, eastPanelMode: action.payload };
    default:
      return state;
  }
}
