import GAMEPAD_CONSTANTS from "constants-gamepad"

/**
 * Set the x and y of the left gamepad stick when connected
 *
 * @param {float} x - 1 to -1
 * @param {float} y - 1 to -1
 *
 */
const leftStickChanged = (x, y) => ({type: GAMEPAD_CONSTANTS.LEFT_STICK_CHANGED, data: [x, y]});

module.exports = { leftStickChanged };