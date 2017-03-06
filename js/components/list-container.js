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

    onAddSubmit(e) {
    	e.preventDefault();
    	let input = this.state.text;
    	let cardArray = this.state.cards
    	this.setState({
	      cards:  this.state.cards.concat(this.state.text)
	    })
    	console.log('clicked!')
    	console.log(this.state.cards)
    }

	render() {
	    return (

	    	// <ListComponent />

	        <div className="list-box">
	            <h2>{this.props.listTitle}</h2>
	            {this.state.cards.map(function(card) {
	            	return <Card title={card} />
	            })}
	            <Card />
				<form className="new-form">
	           		<input type="text" placeholder="type something!" onChange={this.onAddInputChanged} />
	           		<Submit type="submit" onClick={this.onAddSubmit} />
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