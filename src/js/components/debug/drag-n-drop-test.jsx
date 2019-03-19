import React, {Component} from "react"

import { connect } from "react-redux"

class DragNDropTest extends React.Component {
	
	constructor(props) {
		super(props);
	}

	drag = (event) => {
		event.dataTransfer.setData("text", event.target.id);
	}

	allowDrop = (event) => {
		event.preventDefault();
	}

	drop = (event) => {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		console.log(data)
		event.target.appendChild(document.getElementById(data));
	}

	render() {
		return (
			<div id="drag-n-drop-test">
				<p><strong>Drag & Drop</strong></p>
				<div className="square red" onDrop={this.drop} onDragOver={this.allowDrop}>
					<span id="thingy" draggable="true" onDragStart={this.drag}>Thing</span>
				</div>
				<div className="square blue" onDrop={this.drop} onDragOver={this.allowDrop}></div>
			</div>
		)
	}

}

export default connect()(DragNDropTest);
export {DragNDropTest as BaseDragNDropTest};