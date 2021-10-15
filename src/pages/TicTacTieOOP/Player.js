export default class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.playerTurns = [];
  }

  getPlayerName() {
    return this.playerName;
  }

  setPlayerName(name) {
    this.playerName = name;
  }

  getPlayerTurns() {
    return this.playerTurns;
  }

  setPlayerTurns(turns) {
    this.playerTurns = turns;
  }

  addTurn(turn) {
    this.playerTurns.push(turn);
  }

  clearTurns() {
    this.playerTurns = [];
  }
}
