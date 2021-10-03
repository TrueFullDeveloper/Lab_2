export const getWinCombanations = (fieldSize) => {
  let winCombinationList = [];

  //Horizontal Win Combination
  for (let i = 0; i < fieldSize * fieldSize; i += fieldSize) {
    let temp = [];

    for (let j = i; j < fieldSize + i; j++) {
      temp.push(j);
    }

    winCombinationList.push(temp);
  }

  //Vertical Win Combination
  for (let i = 0; i < fieldSize; i++) {
    let temp = [];

    for (let j = i; j <= fieldSize * (fieldSize - 1) + i; j += fieldSize) {
      temp.push(j);
    }

    winCombinationList.push(temp);
  }

  //Left to Right Diagonal
  let temp = [];
  for (let i = 0; i < fieldSize * fieldSize; i += fieldSize + 1) {
    temp.push(i);
  }
  winCombinationList.push(temp);

  //Right to Left Diagonal
  temp = [];
  for (
    let i = fieldSize - 1;
    i <= fieldSize * (fieldSize - 1);
    i += fieldSize - 1
  ) {
    temp.push(i);
  }
  winCombinationList.push(temp);

  return winCombinationList;
};
