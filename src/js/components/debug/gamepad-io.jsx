import React, {Component} from "react"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {
		gamepad: state.gamepad,
		gamepadConnected: state.settings.gamepadConnected,
		gamepadIndex: state.settings.gamepadIndex,
	}
}

class GamepadIO extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="gamepad-io">
				<p><strong>Gamepad Debug</strong></p>
				<p>Gamepad connected: {String(this.props.gamepadConnected)} ({this.props.gamepadIndex})</p>
				<p>Left Stick: {this.props.gamepad.leftStick[0]}, {this.props.gamepad.leftStick[1]}</p>
			</div>
		)
	}

}

export default connect(mapStateToProps)(GamepadIO);
export {GamepadIO as BaseGamepadIO};