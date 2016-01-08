import { CORRECT_ANSWER, INCORRECT_ANSWER } from '../actions/actions';
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
    return {...state, ...{ 
      colors: colors(),
      correctColor: colorsArray[Math.floor(Math.random() * colorsArray.length)]
    }
  };
  default:
    return state;
  }
}
