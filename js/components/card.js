require('babel-polyfill');

import React from 'react';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		// this.state = { whatever: 0 };
		// this.whateverFunction = this.whateverFunction.bind(this);
	}
	// whateverFunction(value) {
	// 	this.setState({
	// 		whatever: this.state.whatever + value
	// 	})
	// }

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
