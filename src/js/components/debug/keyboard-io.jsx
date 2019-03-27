import React, {Component} from "react"

import {KEYS} from "constants-keyboard"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {
		keyboard: state.keyboardIO
	}
}

class KeyboardIO extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="gamepad-io">
				<p><strong>Keyboard</strong></p>
				
				<div>
					<p>Key: {KEYS[this.props.keyboard.keyID] || "N/A"}</p>
					<p>Pressed: {this.props.keyboard.pressed ? "Yes" : "No"}</p>
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps)(KeyboardIO);
export {KeyboardIO as BaseKeyboardIO};