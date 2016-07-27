import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from '../actions/index';

export default function menuButton(state = false, action) {
  switch (action.type) {
  case OPEN_MENU:
    return state = true;
  case CLOSE_MENU:
    return state = false;
  case TOGGLE_MENU:
  	return state = !state;
  default:
    return state;
  }
}
