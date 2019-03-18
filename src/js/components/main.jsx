import React, {Component} from "react"

import { Provider } from "react-redux"
import Store from "store"

import Viewport from "viewport"

class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="viewport">
				<Provider store={Store}>
					<Viewport />
				</Provider>
			</div>
		)
	}
}

export default Main;