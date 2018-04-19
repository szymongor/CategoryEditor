import { EDIT_CATEGORY } from '../actions/appActions';

const CATEGORY_VIEW = 'CATEGORY_VIEW';
const CATEGORY_EDIT = 'CATEGORY_EDIT';

const INITIAL_STATE = { eastPanelMode: CATEGORY_VIEW };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      return { ...state, eastPanelMode: CATEGORY_EDIT };
    default:
      return state;
  }
}
