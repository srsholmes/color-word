import { CORRECT_ANSWER, INCORRECT_ANSWER, RESET_DIFFICULTY, CHANGE_DIFFICULTY } from '../actions/index';
import { colors, shuffle } from '../modules';

const colorsArray = colors();
const correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
const word = colorsArray[Math.floor(Math.random() * colorsArray.length)];

const initialState = {
	colors: colorsArray,
	correctColor,
  word
};

export default function setColors(state = initialState, action) {
  switch (action.type) {
  case CORRECT_ANSWER:
  case CHANGE_DIFFICULTY:
  case RESET_DIFFICULTY:
    return {...state, ...{ 
      colors: shuffle(colors()),
      correctColor: colorsArray[Math.floor(Math.random() * colorsArray.length)],
      word: colorsArray[Math.floor(Math.random() * colorsArray.length)]
    }
  };
  default:
    return state;
  }
}
