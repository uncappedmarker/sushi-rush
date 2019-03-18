import CONSTANTS_KEYBOARD from "constants-keyboard"

/**
 * A list of the last 10 *VALID* keyboard IO
 *
 * action: {type: {int}, key: {int}}
 *
 */
const keyboardIO = (state = [], action) => {

	// Limit to last 10 items, then put the last action at the beginning
	let newState = [...state].slice(0, 9);
		newState.unshift(action.key);

	switch (action.type) {
		case CONSTANTS_KEYBOARD.KEY_ENTER:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_ARROW_UP:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_ARROW_LEFT:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_ARROW_RIGHT:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_ARROW_DOWN:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_ESC:
			return newState;
		case CONSTANTS_KEYBOARD.KEY_SHIFT:
			return newState;
		default:
			return state;
	};
};

export { keyboardIO };