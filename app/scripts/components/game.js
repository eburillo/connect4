import React from 'react';
import _board from '../core/_board';
import Board from './board';
import Infobox from './infobox';

export default class extends React.Component {

	constructor() {
	    super();

	    this.state = {
	      	board: new _board
	    };
	}

	insertChip(columnIndex, activePlayer) {
	    if (this.state.board.boardActive) {
	    	this.state.board.insertChip(columnIndex, activePlayer);
		    this.setState({
		      board: this.state.board
		    });
	    }   
  	}

  	restartGame() {
  		this.setState({
	      	board: new _board
	    });
  	}

  	render() {  
    	return (
			<div className="container">
		      	<h1>Connect 4</h1>
		      	<Board board={this.state.board} insertChip={this.insertChip.bind(this)} />
		    	<Infobox board={this.state.board} restartGame={this.restartGame.bind(this)} />
		    </div>
    	);
  	}  	

}