import { createStore, combineReducers } from "redux";

// Keyboard
import { keyboardIO } from "keyboard-reducer";

// Gamepad
import { leftStick } from "gamepad-reducers";
const gamepad = combineReducers({
	leftStick
})

// Game settings
import { settings } from "settings-reducers"

// const gampadIO = combineReducers()

const store = combineReducers({
	keyboardIO,
	gamepad,
	settings
});

export default createStore(store);