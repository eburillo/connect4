import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  insertChip() {
    this.props.insertChip(this.props.y, this.props.activePlayer);
  }

  render() {

    var cellClasses = classNames({
      'cell': true,
      'cell-p1': (this.props.cell === 1),
      'cell-p2': (this.props.cell === 2)
    });

    return (
      <li className={cellClasses} onClick={this.insertChip.bind(this)}></li>
    ); 
  }

}