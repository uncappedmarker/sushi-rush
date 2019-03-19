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
				{
					!this.props.gamepadConnected ?
					<p>No gamepad connected</p>
					:
					<div>
						<p>Gamepad connected: {String(this.props.gamepadConnected)} (gamepad #{this.props.gamepadIndex})</p>
						<p>Left Stick: x: {this.props.gamepad.leftStick[0].toFixed(2)}, y: {this.props.gamepad.leftStick[1].toFixed(2)}</p>
						<p>Right Stick: x: {this.props.gamepad.rightStick[0].toFixed(2)}, y: {this.props.gamepad.rightStick[1].toFixed(2)}</p>
					</div>
				}
			</div>
		)
	}

}

export default connect(mapStateToProps)(GamepadIO);
export {GamepadIO as BaseGamepadIO};