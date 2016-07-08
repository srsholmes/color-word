import { CORRECT_ANSWER, INCORRECT_ANSWER, RESET_DIFFICULTY, CHANGE_DIFFICULTY } from '../actions/index';
import { colors, shuffle, getRandom } from '../modules';

const colorsArray = colors();
const correctColor = getRandom(colorsArray);
const word = getRandom(colorsArray);
const initialState = {
	colors: shuffle(colorsArray),
	correctColor,
  word,
  colorWords: shuffle(colorsArray)
};

export default function setColors(state = initialState, action) {
  switch (action.type) {
  case CORRECT_ANSWER:
  case CHANGE_DIFFICULTY:
  case RESET_DIFFICULTY:
    return {...state, ...{ 
      colors: shuffle(colorsArray),
      colorWords: shuffle(colorsArray),
      correctColor: getRandom(colorsArray),
      word: getRandom(colorsArray)
    }
  };
  default:
    return state;
  }
}
