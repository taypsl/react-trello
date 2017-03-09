require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.js';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
			<Board title="Title" lists={["list1", "list2", "list3"]}/>,

	document.getElementById('app'))
);

 