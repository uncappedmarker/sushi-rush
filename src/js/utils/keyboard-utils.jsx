import {KEYS} from "constants-keyboard"
import { keyDown, keyUp } from "keyboard-actions"

const handleKeyDown = (dispatch, event) => {
	// No holding keys down
	if (event.repeat) return false;

	const keyID = event.keyCode || event.which;
	const match = KEYS[keyID];
	if (match) {
		dispatch(keyDown(keyID));
	}
}

const handleKeyUp = (dispatch) => {
	dispatch(keyUp());
}

export { handleKeyDown, handleKeyUp }