import CONSTANTS_SETTINGS from "constants-settings"

const initialState = {
	gamepadConnected: false,
	gamepadIndex: -1
}

const settings = (state = initialState, action) => {
	switch(action.type) {
		case CONSTANTS_SETTINGS.SET_GAMEPAD_INDEX:
			return {...state,
				gamepadConnected: true,
				gamepadIndex: action.data
			}
		case CONSTANTS_SETTINGS.GAMEPAD_DISCONNECTED:
			return {...state,
				gamepadConnected: false,
				gamepadIndex: -1
			}
		default:
			return state;
	}
}

module.exports = { settings };