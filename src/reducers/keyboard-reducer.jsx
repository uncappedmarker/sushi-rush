import CONSTANTS_KEYBOARD from "constants-keyboard"

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS_KEYBOARD.KEY_ENTER:
			return action.payload;
		default:
			return state;
	};
};

export default rootReducer;