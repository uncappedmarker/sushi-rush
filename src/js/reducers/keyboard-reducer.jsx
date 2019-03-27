import {KEY_DOWN, KEY_UP} from "constants-keyboard"

/**
 * The last key id pressed
 *
 */
const defaultState = {
	pressed: false,
	keyID: -1
}
const keyboardIO = (state = defaultState, action) => {

	switch (action.type) {
		case KEY_DOWN:
			return {
				...state,
				pressed: true,
				keyID: action.keyID
			};
		case KEY_UP:
			return {
				...state,
				pressed: false
			}
		default:
			return state;
	};
};

export { keyboardIO };