require('babel-polyfill');

import React from 'react';
import Card from './card';

export default class List extends React.Component {
	render() {
	    return (
	        <div className="list-box">
	            <h2>{this.props.title}</h2>
	            {this.props.cards.map(function(card, index) {
	            	return <Card key={index} text={card} />
	            })}
	        </div>

	    );
    }
}

