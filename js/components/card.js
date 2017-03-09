require('babel-polyfill');

import React from 'react';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
	        <div className="card-box">
	        	<p>{this.props.text}</p>
	        </div>
    	);
	}
}

Card.defaultProps = {
 	text: 'Some default text.'
}
