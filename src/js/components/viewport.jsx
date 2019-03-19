import React, {Component} from "react"

import MainMenu from "main-menu"
import GamepadIO from "gamepad-io"
import DragNDropTest from "drag-n-drop-test"

// Utils
import {connectGamepad} from "gamepad-utils"

// Actions
import { setGamepadConnected, setGamepadDisconnected } from "settings-actions"

// Redux
import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {view: state.view.view}
}

class Viewport extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getView = () => {
		switch(this.props.view) {
			case "main":
				return <MainMenu />
			default:
				return null;
		}
	}

	componentDidMount = () => {

		window.addEventListener("gamepadconnected", connectGamepad.bind(this, this.props.dispatch.bind(this)))
		window.addEventListener("gamepaddisconnected", () => this.props.dispatch(setGamepadDisconnected()))
		// window.addEventListener("keyup", this.keyPressed)
		
	}

	render() {
		return (
			<div>

				<div id="viewport">
					{this.getView()}
				</div>

				<div id="debug" className="box">
					<div className="section">
						<GamepadIO />
					</div>
					<div className="section">
						<DragNDropTest />
					</div>
				</div>
				
			</div>
		)
	}
}

export default connect(mapStateToProps)(Viewport);
export {Viewport as BaseViewport};