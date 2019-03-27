import React, {Component} from "react"

import cx from "classnames"

import {KEYS} from "constants-keyboard"
import {
	incrementTabIndex,
	decrementTabIndex,
	setTabIndex,
	setView,
} from "view-actions"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {
		tabIndex: state.view.tabIndex,
		gamepad: state.gamepad,
		keyboard: state.keyboardIO,

	}
}

class MainMenu extends React.Component {
	
	constructor(props) {
		super(props)
	}

	componentDidUpdate = (prevProps) => {

		// Keyboard pressed
		if (prevProps.keyboard.pressed && !this.props.keyboard.pressed) {
			const keyID = this.props.keyboard.keyID;

			// Key Up
			if (keyID === 38) {
				this.props.dispatch(setTabIndex(0));
			}
			// Down
			else if (keyID === 40) {
				this.props.dispatch(setTabIndex(1));
			}
			// Enter
			else if (keyID === 13) {
				if (this.props.tabIndex === 0) {
					this.props.dispatch(setView("game"));
				} else if (this.props.tabIndex === 1) {
					this.props.dispatch(setView("settings"));
				}
			}
		}

	}

	render() {
		return (
			<div id="main-menu">
				<h1 className="text-center">Sushi Rush!</h1>

				<ul>
					<li><a onClick={() => this.props.dispatch(setView("game"))} className={cx({"active": (this.props.tabIndex === 0)})}>Start</a></li>
					<li><a onClick={() => {}} className={cx({"active": (this.props.tabIndex >= 1)})}>Settings</a></li>
				</ul>
			</div>
		)
	}

}

export default connect(mapStateToProps)(MainMenu);
export {MainMenu as BaseMainMenu};