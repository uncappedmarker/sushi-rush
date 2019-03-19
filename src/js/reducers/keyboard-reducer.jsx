import {GOT_KEYPRESS} from "constants-keyboard"

/**
 * The last key id pressed
 *
 */
const keyboardIO = (state = -1, action) => {

	switch (action.type) {
		case GOT_KEYPRESS:
			return action.key;
		default:
			return state;
	};
};

export { keyboardIO };