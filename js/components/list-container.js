require('babel-polyfill');

import React from 'react';
import Card from './card';
import List from './list'

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
    }

    onAddSubmit(e) {
    	e.preventDefault();
    	let input = this.state.text;
    	let cardArray = this.state.cards;
    	var cards = cardArray.concat(input);
        this.setState({
	      cards:  cards,
          text: ''
	    })
    }

	render() {
	    return (
	        <div className="list-box">
                <List 
                    title={this.props.title}
                    cards={this.state.cards}
                    onAddInputChanged={this.onAddInputChanged}
                    onAddSubmit={this.onAddSubmit}
                />
				<form className="new-form">
	           		<input type="text" placeholder="type something!" value={this.state.text} onChange={this.onAddInputChanged} />
	           		<Submit type="submit" onClick={this.onAddSubmit} />
	       		</form>
	        </div>

	    );
    }
}

export function Submit(props) {
	return <button onClick={props.onClick}>Submit</button>
}