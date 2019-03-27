import React, {Component} from "react"

import RECIPES from "constants-recipes"
import INGREDIENTS from "constants-ingredients"

import {forEachInObject} from "object-utils"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
	return {state}
}

class GameWindow extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getDefaultState = () => {
		return {
			ingredients: []
		}
	}

	state = this.getDefaultState()

	componentDidMount = () => {
		console.log(RECIPES)
		console.log(INGREDIENTS)
	}

	addIngredient = (ingredient) => {
		let addedIngredients = [...this.state.ingredients];
		let ingredients = [...addedIngredients].map(each => each.title);


		if (ingredients.indexOf(ingredient.title) === -1) {
			addedIngredients.push(ingredient);
			this.setState({
				ingredients: addedIngredients
			})
		}

	}

	removeIngredient = (index) => {
		let addedIngredients = [...this.state.ingredients];
			addedIngredients.splice(index, 1);
		this.setState({
			ingredients: addedIngredients
		})
	}

	make = () => {
		console.log("Making")
	}

	render() {
		return (

			<div id="game">

				<div>
					<p><strong>Available Ingredients</strong></p>
					{
						Object.keys(INGREDIENTS).map(keyname => {
							const data = INGREDIENTS[keyname]
							return (
								<p key={keyname}><a onClick={() => { this.addIngredient(data); }} key={keyname}>{data.title}</a></p>

							)
						})
					}
				</div>

				<div>
					<p><strong>Added</strong></p>
					{
						this.state.ingredients.map((each, index) => {
							return (
								<p key={each.title}><a onClick={() => { this.removeIngredient(index); }}>{each.title}</a></p>

							)
						})
					}
				</div>
				<hr />
				<div>
					<a onClick={this.make}>Make!</a>
				</div>

			</div>

		)
	}
}

export default connect(mapStateToProps)(GameWindow);
export {GameWindow as BaseGameWindow};