import React, {Component} from "react"

import KeyboardStore from "keyboard-store"

import {isFunction} from "object-utils"

export default class MainMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	static defaultProps = {
		changeView: (() => {}),
		keyPressed: (() => {}),
	}

	componentDidMount() {
		// const 
		KeyboardStore.subscribe(this.onKeyPressed)
	}

	onKeyPressed = () => {
		const state = KeyboardStore.getState();
		console.log(state)
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
			</div>
		)
	}

}