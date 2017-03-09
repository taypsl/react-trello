require('babel-polyfill');

import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component {
    constructor(props) {
    	super(props);

    }
	render() {
		return (
	        <div className="board-box">
	            <h1 className="board-title">{this.props.title}</h1>
	            {this.props.lists.map(function(list, index) {
	            	return <ListContainer key={index} text={list} />
	            })}
	        </div>
	    );
	}
    
}

Board.defaultProps = {
	title: "Default Board Title"
}
