import {
	KEY_UP,
	KEY_DOWN,
} from "constants-keyboard"

const keyDown = (key_id) => ({ type: KEY_DOWN, keyID: key_id });
const keyUp = () => ({ type: KEY_UP });

export {
	keyDown,
	keyUp,
};