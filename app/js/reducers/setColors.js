import { CORRECT_ANSWER, INCORRECT_ANSWER, RESET_DIFFICULTY, CHANGE_DIFFICULTY } from '../actions/index';
import { colors } from '../modules';

let colorsArray = colors();
let correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];

let initialState = {
	colors: colorsArray,
	correctColor: correctColor
};

export default function setColors(state = initialState, action) {
  switch (action.type) {
  case CORRECT_ANSWER:
  case INCORRECT_ANSWER:
  case CHANGE_DIFFICULTY:
  case RESET_DIFFICULTY:
    return {...state, ...{ 
      colors: colors(),
      correctColor: colorsArray[Math.floor(Math.random() * colorsArray.length)]
    }
  };
  default:
    return state;
  }
}
