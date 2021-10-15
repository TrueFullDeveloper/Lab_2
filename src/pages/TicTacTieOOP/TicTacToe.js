import { getWinCombanations } from "utils/getWinCombanations";
import { ZERO, CROSS } from "config/ticTacToeConfig";

export default class TicTacToe {
  constructor(currentTurnFlag, gameState, fieldSize) {
    this.currentTurnFlag = currentTurnFlag;
    this.gameState = gameState;
    this.fieldSize = fieldSize;
    this.fieldState = new Array(fieldSize * fieldSize).fill("");
    this.winCombinationList = getWinCombanations(fieldSize);
    this.winnerName = "";
  }

  getCurrentTurnFlag() {
    return this.currentTurnFlag;
  }

  changeCurrentTurnFlag() {
    this.currentTurnFlag = !this.currentTurnFlag;
  }

  getGameState() {
    return this.gameState;
  }

  setGameState(gameState) {
    this.gameState = gameState;
  }

  getFieldState() {
    return this.fieldState;
  }

  changeFieldState(index) {
    this.fieldState[index] = this.currentTurnFlag ? CROSS : ZERO;
  }

  clearFieldState() {
    this.fieldState = new Array(this.fieldSize * this.fieldSize).fill("");
  }

  getWinCombinationList() {
    return this.winCombinationList;
  }

  setWinCombinationList() {
    this.winCombinationList = getWinCombanations(this.fieldSize);
  }

  getWinnerName() {
    return this.winnerName;
  }

  setWinnerName(winnerName) {
    this.winnerName = winnerName;
  }
}
