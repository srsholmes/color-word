export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const RESET_SCORE = 'RESET_SCORE';
export const CHOOSE_COLOR = 'CHOOSE_COLOR';

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';


// export function incrementScore() {
// 	return {
// 		type: INCREMENT_SCORE
// 	};
// }

// export function resetScore() {
// 	return {
// 		type: RESET_SCORE
// 	};
// }

export function correctAnswer() {
	return {
		type: CORRECT_ANSWER
	};
}

export function incorrectAnswer() {
	return {
		type: INCORRECT_ANSWER
	};
}
