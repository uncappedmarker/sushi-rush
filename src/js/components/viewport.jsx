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

		window.addEventListener("gamepadconnected", connectGamepad.bind(this, this.props.dispatch.bind(this)))
		window.addEventListener("gamepaddisconnected", () => this.props.dispatch(setGamepadDisconnected()))
		// window.addEventListener("keyup", this.keyPressed)
	}

	render() {
		return (
			<div>

				<div id="debug" className="box">
					<GamepadIO />
				</div>
				
			</div>
		)
	}
}

export default connect(mapStateToProps)(Viewport);
export {Viewport as BaseViewport};