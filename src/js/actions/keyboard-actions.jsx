import {GOT_KEYPRESS} from "constants-keyboard"

const gotKeyPress = (key_id) => ({ type: GOT_KEYPRESS, key: key_id });

export { gotKeyPress };