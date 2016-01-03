import { CHOOSE_COLOR } from '../actions/actions';
import { colors } from '../modules';

let colorsArray = colors();
let correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];

let initialState = {
	colors: colorsArray,
	correctColor: correctColor
};

console.log(initialState);

export default function setColors(state = initialState, action) {
  switch (action.type) {
  case CHOOSE_COLOR:
    return {...state, ...{ 
      colors: [],
      correctColor: 'red'
    }
  };
  default:
    return state;
  }
}
