require('babel-polyfill');

import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		clicked: false
    	},
    	this.onAddInputChanged = this.onAddInputChanged.bind(this),
    	this.onButtonClick = this.onButtonClick.bind(this)
    }

    onAddInputChanged() {
    	this.setState({
    		change: true
    	})
    	console.log('I am sensing a disturbance in the force.')
    }

    onButtonClick() {
    	event.preventDefault();
    	this.setState({
    		clicked: true
    	})
    	console.log('clicked!')
    }

	render() {
	    return (
	        <div className="list-box">
	            <h2>{this.props.listTitle}</h2>
	            <Card />
	            <Card />
	            <Card />
				<form className="new-form">
	           		<input type="text" placeholder="type something!" onChange={() => this.onAddInputChanged()} />
	           		<Submit type="submit" onClick={this.onButtonClick} />
	       		</form>
	        </div>

	    );
    }
}

CardList.defaultProps = {
	listTitle: "default list title"
}

function Submit(props) {
	return <button onClick={props.onClick}>Submit</button>
}

