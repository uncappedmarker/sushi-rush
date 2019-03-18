import React, {Component} from "react"

import GamepadIO from "gamepad-io"

// Utils
import {connectGamepad} from "gamepad-utils"

// Actions
import { setGamepadConnected, setGamepadDisconnected } from "settings-actions"

// Redux
import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {...state}
}

class Viewport extends React.Component {
	
	constructor(props) {
		super(props);
	}



	componentDidMount = () => {

		console.clear()

		window.addEventListener("gamepadconnected", connectGamepad.bind(this, this.props.dispatch.bind(this)))
		window.addEventListener("gamepaddisconnected", () => this.props.dispatch(setGamepadDisconnected()))
		// window.addEventListener("keyup", this.keyPressed)
	}

	render() {
		return (
			<div>

				<div>
					<GamepadIO />
				</div>
				
			</div>
		)
	}
}

export default connect(mapStateToProps)(Viewport);
export {Viewport as BaseViewport};