import { CHANGE_MODE } from '../actions/appActions';

import { CATEGORY_VIEW, CATEGORY_EDIT } from '../actions/appActions';

const INITIAL_STATE = { eastPanelMode: CATEGORY_VIEW };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, eastPanelMode: action.payload };
    default:
      return state;
  }
}
