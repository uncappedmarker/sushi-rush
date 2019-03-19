import React, {Component} from "react"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {tabIndex: state.view.tabIndex}
}

class MainMenu extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="main-menu">
				<h1 className="text-center">Sushi Rush!</h1>
			</div>
		)
	}

}

export default connect(mapStateToProps)(MainMenu);
export {MainMenu as BaseMainMenu};