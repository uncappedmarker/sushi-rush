import {GOT_KEYPRESS} from "constants-keyboard"
import {gotKeyPress} from "keyboard-actions"
import Store from "store"

describe("Got a keyboard press", () => {

	it("Check the key pressed action creator", () => {
		const result = gotKeyPress(23);
		const expected = {type: GOT_KEYPRESS, key: 23};
		expect(result).toEqual(expected);
	});

	it("Check the state beforehand", () => {
		const state = Store.getState().keyboardIO;
		expect(state).toEqual(-1);
	});

	it("Dispatch a keypress and see it was stored", () => {
		Store.dispatch(gotKeyPress(23));
		const state = Store.getState().keyboardIO;
		expect(state).toEqual(23);
	});
	
})