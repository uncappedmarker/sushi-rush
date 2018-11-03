import React, {Component} from "react"

import {isFunction} from "object-utils"

// Main views
import MainMenu from "main-menu"

// Redux
import KeyboardStore from "keyboard-store"
import {onKeyPress} from "keyboard-actions"

export default class Wrapper extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getDefaultState = () => {
		return {
			controllerConnected: false,
			controllerIndex: 0,
			showControllerEvents: true,
			listenToKeyPress: true,
			view: "mainMenu"
		}
	}

	state = this.getDefaultState();

	/**
	 * @method controllerDidSomething
	 *
	 * When `this.state.showControllerEvents`
	 * is active, show the controller outputs
	 * in a div
	 *
	 *
	 */
	controllerDidSomething = () => {
		
		var haveEvents = 'ongamepadconnected' in window;

		const theController = navigator.getGamepads();
		if (theController[this.state.controllerIndex]) {
			const controller = theController[this.state.controllerIndex];

			const container = document.getElementById("controllerEvents");
			if (container) {
				for (var i =0;i<controller.axes.length;i++) {
					document.getElementById(("axis" + i)).innerHTML = controller.axes[i]
				}

				for (var i=0;i<controller.buttons.length;i++) {
					const output = document.querySelector(("#buttonOutput #btn" + i))
					if (!output) {
						let p = document.createElement("p")
							p.id = "btn" + i;
							document.getElementById("buttonOutput").appendChild(p)
					}
					const btn = controller.buttons[i]
					document.getElementById("btn" + i).innerHTML = "Btn " + i + ": " + ((btn.pressed) ? "X" : "-") + " " + String(btn.value)
				}
			}

			requestAnimationFrame(this.controllerDidSomething)
			
		}
	}
	
	onControllerConnected = (controller) => {
		this.setState({
			controllerConnected: true,
			controllerIndex: controller.gamepad.index
		})

		requestAnimationFrame(this.controllerDidSomething)

		console.log(controller)
	}

	onControllerDisconnected = (controller) => {
		this.setState({
			controllerConnected: false
		})

		console.log(controller)
	}

	gpTimer = null;

	componentDidMount() {
		window.addEventListener("gamepadconnected", this.onControllerConnected)
		window.addEventListener("gamepaddisconnected", this.onControllerDisconnected)
		window.addEventListener("keyup", this.keyPressed)
	}

	keyPressed = (event, handler = (() => {})) => {

		const keyPressed = event.which || event.key;

		if (!this.state.listenToKeyPress) return;

		if (isFunction(handler)) {
			handler(keyPressed)
		}

		KeyboardStore.dispatch( onKeyPress(keyPressed) )

	}

	changeView = (newView = "mainMenu") => {
		this.setState({
			view: newView
		})
	}

	makeView = () => {
		switch(this.state.view) {
			case "mainMenu":
				return <MainMenu changeView={this.changeView} keyPressed={this.keyPressed} />
				break;
			default:
				return null;
				break;
		}
	}

	render() {
			return (
				<div id="viewport">
					{
						(this.state.showControllerEvents) ?
						<div id="controllerEvents">
							<p>Left Stick: <span id="axis0" />, <span id="axis1" /></p>
							<p>Right Stick: <span id="axis2" />, <span id="axis3" /></p>
							<p>Buttons:</p>
							<div id="buttonOutput" />
						</div>
						: null
					}
					{this.makeView()}
				</div>
			)
	}
}