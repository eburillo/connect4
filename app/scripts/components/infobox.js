import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {

  render() {

    var activePlayer;
    var activePlayerClasses = classNames({
        'turnbox': true,
        'turnbox-p1': (this.props.board.activePlayer === 1),
        'turnbox-p2': (this.props.board.activePlayer === 2)
      });

    if (this.props.board.boardActive) {
      activePlayer = 
	     <div>
	     	<h2 className="infobox-title">Now playing:</h2>
	        <div className={activePlayerClasses}></div>
	     </div>;

    } else {
      	activePlayer = 
			<div>
			  	<h2 className="infobox-title">
			    	The winner is player
			  	</h2>
			  	<div className={activePlayerClasses}></div>
			</div>;
    }

    return (
      <div className="infobox">
      	{activePlayer}
      	<button className="btn-restart" onClick={this.props.restartGame}>Restart Game</button>
      </div>
    );

  }

}
     