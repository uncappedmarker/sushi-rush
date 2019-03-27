import React, {Component} from "react"

// Views
import MainMenu from "main-menu"
import GameWindow from "game"

// Dbug
import GamepadIO from "gamepad-io"
import KeyboardIO from "keyboard-io"
import DragNDropTest from "drag-n-drop-test"

// Utils
import {connectGamepad} from "gamepad-utils"
import {handleKeyDown, handleKeyUp} from "keyboard-utils"

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
			case "game":
				return <GameWindow />
			default:
				return null;
		}
	}

	componentDidMount = () => {

		window.addEventListener("gamepadconnected", connectGamepad.bind(this, this.props.dispatch) );
		window.addEventListener("gamepaddisconnected", () => this.props.dispatch(setGamepadDisconnected()) );
		window.addEventListener("keydown", handleKeyDown.bind(this, this.props.dispatch) );
		window.addEventListener("keyup", handleKeyUp.bind(this, this.props.dispatch) );
		
	}

	render() {
		return (
			<div>

				<div id="viewport">
					{this.getView()}
				</div>

				<div id="debug" className="box">
					<div className="section">
						<p>View: "{this.props.view}"</p>
					</div>
					<div className="section">
						<GamepadIO />
					</div>
					<div className="section">
						<KeyboardIO />
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