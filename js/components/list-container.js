require('babel-polyfill');

import React from 'react';
import Card from './card';

export default class ListComponent extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		text: '',
    		cards: []
    	},
    	this.onAddInputChanged = this.onAddInputChanged.bind(this),
    	this.onAddSubmit = this.onAddSubmit.bind(this)
    }

    onAddInputChanged(event) {
    	let text = event.target.value;
    	this.setState({
    		text: text
    	})
    	console.log('I am sensing a disturbance in the force.')
    }

    onAddSubmit() {
    	let input = this.state.text;
    	this.setState({
    		cards: this.state.cards.push(input) //currently replacing not adding to array
    	})
    	console.log('clicked!')
    	console.log(this.state.cards)
    }

	render() {
	    return (

	    	// <ListComponent />

	        <div className="list-box">
	            <h2>{this.props.listTitle}</h2>
	            <Card />
	            <Card />
	            <Card />
				<form className="new-form">
	           		<input type="text" placeholder="type something!" onChange={this.onAddInputChanged} />
	           		<Submit type="submit" onClick={() => this.onAddSubmit(this.props.text)} />
	       		</form>
	        </div>

	    );
    }
}

ListComponent.defaultProps = {
	listTitle: "default list title"
}

export function Submit(props) {
	return <button onClick={props.onClick}>Submit</button>
}