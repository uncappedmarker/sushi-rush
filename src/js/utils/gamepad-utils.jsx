import { setGamepadConnected, setGamepadDisconnected } from "settings-actions"

import { leftStickChanged } from "gamepad-actions"

const connectGamepad = (dispatch = (() => {}), gamepad) => {
	dispatch(setGamepadConnected(gamepad.gamepad.index));

	requestAnimationFrame(controllerDidSomething.bind(this, dispatch, gamepad.gamepad.index))
}

const controllerDidSomething = (dispatch = (() => {}), index) => {
        
    const controllers = navigator.getGamepads();
    const theController = controllers[index];
    if (theController) {

        // Left Stick (x,y)
        dispatch(leftStickChanged(theController.axes[0], theController.axes[1]));

        requestAnimationFrame(controllerDidSomething.bind(this, dispatch, index))
        
    }
}

module.exports = {connectGamepad}