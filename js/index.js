require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.js';
// import FlashCard from './components/Flash2.js';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
			<Board />,

	document.getElementById('app'))
);
