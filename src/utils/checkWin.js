export const checkWin = (playerTurns, winCombinationList) => {
  let isWinTurn = false;

  winCombinationList.forEach((item) => {
    const temp = playerTurns.concat(item);
    const checkSet = new Set(temp);

    if (temp.length - checkSet.size === 3) {
      isWinTurn = true;
    }
  });

  return isWinTurn;
};
