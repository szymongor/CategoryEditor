export const CHANGE_MODE = 'CHANGE_MODE';

export const CATEGORY_VIEW = 'CATEGORY_VIEW';
export const CATEGORY_EDIT = 'CATEGORY_EDIT';
export const CATEGORY_NEW = 'CATEGORY_NEW';

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: mode
  };
}
