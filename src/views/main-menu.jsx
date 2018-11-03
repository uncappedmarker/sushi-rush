import React, {Component} from "react"

import {KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ENTER} from "constants-keyboard"

import KeyboardStore from "keyboard-store"

import {isFunction} from "object-utils"

const MENU_OPTIONS = [
	{label: "New Game"}
]

export default class MainMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	static defaultProps = {
		changeView: (() => {}),
		keyPressed: (() => {}),
		selected: 0,
	}

	componentDidMount() {
		// const 
		KeyboardStore.subscribe(this.onKeyPressed)
	}

	onKeyPressed = () => {
		const key = KeyboardStore.getState();

		if (key === KEY_ARROW_UP) {

		} else if (key === KEY_ARROW_DOWN) {

		}
	}

	// handleKeyPress()

	changeView = (newView) => {
		if (isFunction(this.props.changeView)) {
			this.props.changeView(newView);
		}
	}

	render() {
		return (
			<div id="main-menu" className="p-1">
				<p><a onClick={this.changeView.bind(this, "gameBoard")}>New Game</a></p>
				<p><a onClick={this.changeView.bind(this, "gameBoard")}>New Game</a></p>
			</div>
		)
	}

}