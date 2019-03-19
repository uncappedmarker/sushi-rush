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
			<Provider store={Store}>
				<Viewport />
			</Provider>
		)
	}
}

export default Main;