import CONSTANTS_KEYBOARD from "constants-keyboard"

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS_KEYBOARD.KEY_ENTER:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_ARROW_UP:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_ARROW_LEFT:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_ARROW_RIGHT:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_ARROW_DOWN:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_ESC:
			return action.payload;
		case CONSTANTS_KEYBOARD.KEY_SHIFT:
			return action.payload;
		default:
			return undefined;
	};
};

export default rootReducer;