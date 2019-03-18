import CONSTANTS_SETTINGS from "constants-settings"

/**
 * Set that a gamepad was connected, and which id to read
 *
 * @param {int} gamepadIndex
 *
 * @return {object}
 *
 */
const setGamepadConnected = (gamepadIndex = 0) => ({type: CONSTANTS_SETTINGS.SET_GAMEPAD_INDEX, data: gamepadIndex});

/**
 * Set that a gamepad was disconnected
 *
 * @return {object}
 *
 */
const setGamepadDisconnected = () => ({type: CONSTANTS_SETTINGS.GAMEPAD_DISCONNECTED});

module.exports = { setGamepadConnected, setGamepadDisconnected };