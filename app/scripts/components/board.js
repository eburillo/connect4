import React from 'react';
import Cell from './cell';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  

    var board = this.props.board;
    var insertChip = this.props.insertChip;

    return (
      <div className="board">
        {board.grid.map(function(column, y) {
          return (
            <ul className="column" key={y} id={y}>
              {column.map(function(cell, x) {
                  return (
                    <Cell 
                    key={x} 
                    x={x} 
                    y={y} 
                    cell={cell}
                    insertChip={insertChip} 
                    activePlayer={board.activePlayer}>
                    </Cell>
                  );
                })}
            </ul>
          );
        })}
      </div>
    );
  }

}