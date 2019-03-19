import GAMEPAD_CONSTANTS from "constants-gamepad"

/**
 * Has the left stick inputted
 *
 */
const leftStick = (state = [0, 0], action) => {
	switch(action.type) {
		case GAMEPAD_CONSTANTS.LEFT_STICK_CHANGED:
			return action.data;
		default:
			return state;
	}
}

/**
 * Has the left stick inputted
 *
 */
const rightStick = (state = [0, 0], action) => {
	switch(action.type) {
		case GAMEPAD_CONSTANTS.RIGHT_STICK_CHANGED:
			return action.data;
		default:
			return state;
	}
}

module.exports = { leftStick, rightStick };