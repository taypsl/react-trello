require('babel-polyfill');

import React from 'react';
import CardList from './list';

export default class Board extends React.Component {
    constructor(props) {
    	super(props);

    }
	render() {
		return (
	        <div className="board-box">
	            <h1 className="board-title">{this.props.boardTitle}</h1>
	            <CardList />
	            <CardList />
	            <CardList />
	        </div>
	    );
	}
    
}

Board.defaultProps = {
	boardTitle: "Default Board Title"
}