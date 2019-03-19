import GAMEPAD_CONSTANTS from "constants-gamepad"
import CONSTANTS_SETTINGS from "constants-settings"

import {setGamepadConnected, setGamepadDisconnected} from "settings-actions"
import {leftStickChanged, rightStickChanged} from "gamepad-actions"
import Store from "store"

describe("Connecting and disconnecting the gamepad", () => {
	
	it("Check connected gamepad action creator", () => {
		const result = setGamepadConnected(3);
		const expected = {type: CONSTANTS_SETTINGS.SET_GAMEPAD_INDEX, data: 3};
		expect(result).toEqual(expected);
	});

	it("Check disconnected gamepad action creator", () => {
		const result = setGamepadDisconnected();
		const expected = {type: CONSTANTS_SETTINGS.GAMEPAD_DISCONNECTED};
		expect(result).toEqual(expected);
	});

	it("Check state before (gamepad not connected)", () => {
		const state = Store.getState().settings;
		expect(state.gamepadConnected).toEqual(false);
		expect(state.gamepadIndex).toEqual(-1);
	});

	it("Dispatch the data as if a connection was made", () => {
		Store.dispatch(setGamepadConnected(0));
		const state = Store.getState().settings;
		expect(state.gamepadConnected).toEqual(true);
		expect(state.gamepadIndex).toEqual(0);
	});

	it("Disconnected a gamepad, set it", () => {
		Store.dispatch(setGamepadDisconnected());
		const state = Store.getState().settings;
		expect(state.gamepadConnected).toEqual(false);
		expect(state.gamepadIndex).toEqual(-1);
	});

});

describe("Setting the left stick data", () => {
	
	it("Check the action creator", () => {
		const result = leftStickChanged(1, 0.02);
		const expected = {type: GAMEPAD_CONSTANTS.LEFT_STICK_CHANGED, data: [1, 0.02]};
		expect(result).toEqual(expected);
	});

	it("Check state before (0,0) left stick position", () => {
		const state = Store.getState().gamepad.leftStick;
		expect(state).toEqual([0, 0]);
	});

	it("Dispatch left stick stuff to the store, get that data back", () => {
		Store.dispatch(leftStickChanged(0.002, -0.0001));
		const state = Store.getState().gamepad.leftStick;
		expect(state).toEqual([0.002, -0.0001]);
	});

});

describe("Setting the right stick data", () => {
	
	it("Check the action creator", () => {
		const result = rightStickChanged(1, 0.02);
		const expected = {type: GAMEPAD_CONSTANTS.RIGHT_STICK_CHANGED, data: [1, 0.02]};
		expect(result).toEqual(expected);
	});

	it("Check state before (0,0) right stick position", () => {
		const state = Store.getState().gamepad.rightStick;
		expect(state).toEqual([0, 0]);
	});

	it("Dispatch right stick stuff to the store, get that data back", () => {
		Store.dispatch(rightStickChanged(0.002, -0.0001));
		const state = Store.getState().gamepad.rightStick;
		expect(state).toEqual([0.002, -0.0001]);
	});

});