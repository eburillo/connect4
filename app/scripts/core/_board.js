import Settings from './_settings';
import Winner from './_rules';

export default class _board {
 
  constructor() {
    this.grid = Array(Settings.columns).fill().map(() => Array(Settings.rows).fill(0));
    this.boardActive = true;
    this.activePlayer = 1;
    this.moves = 0;
  }

  togglePlayer() {
    this.activePlayer = (this.activePlayer === 1) ? 2 : 1;
  }

  isWinner(row, column) {
    if(this.moves > 6) { // impossible to win earlier
      return Winner(this.grid, row, column);
    }
    else {
      return false;
    }
  }
 
  insertChip(columnId, activePlayer) {
    var column = this.grid[columnId];
    for(var i = column.length - 1; i >= 0; i--) {
      if(column[i] === 0) {
        column[i] = activePlayer;
        this.moves++;   
        if (this.isWinner(i, columnId)) {
          this.boardActive = false;
        }
        else {
          this.togglePlayer();
        }
        break;
      }
    }
  }

}

