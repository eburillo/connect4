import Settings from './_settings';

export default Winner;

const cols = Settings.columns;
const rows = Settings.rows;

function Winner(grid, row, column) {
  	return horizontalWin(grid, row, column) || verticalWin(grid, row, column) || diagonalWin(grid, row, column);
}

function horizontalWin(grid, row, column) {

  var found = 1;
  var currentPlayerChip = grid[column][row];

 // from current column to right
    for (var y = column + 1; y < cols; y++) {
      var cell = grid[y][row];
      if (cell === currentPlayerChip) {
      	found++;
      	if (found === 4) {
	    	return true;
	    }
      }
      else {
      	break;
      }    
    }
// from current column to left
    for (y = column - 1; y >= 0; y--) {
      cell = grid[y][row];
      if (cell === currentPlayerChip) {
      	found++;
      	if (found === 4) {
	    	return true;
	    }
      }
      else {
      	break;
      }    
    }
  return false;
}

function verticalWin(grid, row, column) {

  var found = 1;
  var currentPlayerChip = grid[column][row];

 // from current row going down
    for (var x = row + 1; x < rows; x++) {
      var cell = grid[column][x];
      if (cell === currentPlayerChip) {
      	found++;
      	if (found === 4) {
	    	return true;
	    }
      }
      else {
      	break;
      }    
    }
// from current row going up
    for (x = row - 1; x >= 0; x--) {
      cell = grid[column][x];
      if (cell === currentPlayerChip) {
      	found++;
      	if (found === 4) {
	    	return true;
	    }
      }
      else {
      	break;
      }    
    }
  return false;
}

function diagonalWin(grid, row, column) {
  return isTopRight(grid, row, column) || isTopLeft(grid, row, column);
}

function isTopRight(grid, row, column) {
	var found = 1;
  	var currentPlayerChip = grid[column][row];

 // from current cell to right top
  	var x = row;
    for (var y = column + 1; y < cols; y++) {
    	x--;     
      	var cell = grid[y][x];
      	if (cell === currentPlayerChip) {
      		found++;
      		if (found === 4) {
	    		return true;
	    	}
      	}
      	else {
      		break;
      	}    
    }
// from current cell to left bottom
	x = row;
    for (y = column - 1; y >= 0; y--) {
    	x++;     
      	var cell = grid[y][x];
      	if (cell === currentPlayerChip) {
      		found++;
      		if (found === 4) {
	    		return true;
	    	}
      	}
      	else {
      		break;
      	}    
    }
  return false;
}

function isTopLeft(grid, row, column) {
	var found = 1;
  	var currentPlayerChip = grid[column][row];

 // from current cell to left top
  	var x = row;
    for (var y = column - 1; y >= 0; y--) {
    	x--;     
      	var cell = grid[y][x];
      	if (cell === currentPlayerChip) {
      		found++;
      		if (found === 4) {
	    		return true;
	    	}
      	}
      	else {
      		break;
      	}    
    }
// from current cell to right bottom
	x = row;
    for (y = column + 1; y < cols; y++) {
    	x++;     
      	var cell = grid[y][x];
      	if (cell === currentPlayerChip) {
      		found++;
      		if (found === 4) {
	    		return true;
	    	}
      	}
      	else {
      		break;
      	}    
    }
  	return false;
}

