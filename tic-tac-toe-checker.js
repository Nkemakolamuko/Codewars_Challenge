function isSolved(board) {
  let eachArrIndexes = new Array();
  let final = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 0) {
        final += "";
      } else if (board[i][j] == 1) {
        final += "X";
      } else {
        final += "O";
      }
      eachArrIndexes.push(board[i][j]);
    }
  }
  //   return eachArrIndexes;
  return eachArrIndexes;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
);
// let board = [
//   [0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0],
// ];
// console.log(board[1][1]);
