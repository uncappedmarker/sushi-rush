import { createStore, combineReducers } from "redux";

// Keyboard
import { keyboardIO } from "keyboard-reducer";

// Gamepad
import { leftStick, rightStick } from "gamepad-reducers";
const gamepad = combineReducers({
	leftStick,
	rightStick,
})

// Game settings
import { settings } from "settings-reducers"

// View
import { view } from "view-reducer"

const store = combineReducers({
	keyboardIO,
	gamepad,
	settings,
	view,
});

export default createStore(store);