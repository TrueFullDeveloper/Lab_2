import React, { useState } from "react";
import CrossIcon from "componets/Icons/CrossIcon";
import ZeroIcon from "componets/Icons/ZeroIcon";
import GameResultModal from "componets/GameResultModal";
import { checkWin } from "utils/checkWin";
import Sidebar from "componets/Sidebar";
import { ZERO, FIELD_SIZE, gameStateConfig } from "config/ticTacToeConfig";
import { USER_INFORMATION } from "config/localStorageConfig";
import {
  BorderBottom,
  BorderRight,
  BorderTop,
  BorderLeft,
  TableTitle,
  CellHoverContent,
  Panel,
  CellButton,
  TicTacToeField,
} from "./Styled";

import Player from "pages/TicTacTieOOP/Player";
import TicTacToe from "pages/TicTacTieOOP/TicTacToe";

const userInformation = JSON.parse(localStorage.getItem(USER_INFORMATION));

const firstPlayer = new Player(userInformation.firstPlayer);
const secondPlayer = new Player(userInformation.secondPlayer);

const TicTacToeObj = new TicTacToe(
  true,
  gameStateConfig.IN_PROGRESS,
  FIELD_SIZE
);

const TicTacToeOOP = () => {
  const [isRender, setRender] = useState(false);

  const onMark = (index) => {
    TicTacToeObj.changeFieldState(index);

    const currentTurnFlag = TicTacToeObj.getCurrentTurnFlag();

    if (currentTurnFlag) {
      firstPlayer.addTurn(index);
    } else {
      secondPlayer.addTurn(index);
    }

    if (
      checkWin(
        currentTurnFlag
          ? firstPlayer.getPlayerTurns()
          : secondPlayer.getPlayerTurns(),
        TicTacToeObj.getWinCombinationList()
      )
    ) {
      if (currentTurnFlag) {
        TicTacToeObj.setWinnerName(firstPlayer.getPlayerName());
      } else {
        TicTacToeObj.setWinnerName(secondPlayer.getPlayerName());
      }

      TicTacToeObj.setGameState(gameStateConfig.FINISH);
    } else {
      if (
        firstPlayer.getPlayerTurns().length +
          secondPlayer.getPlayerTurns().length ===
        FIELD_SIZE * FIELD_SIZE
      ) {
        TicTacToeObj.setGameState(gameStateConfig.DRAW);
      } else {
        TicTacToeObj.changeCurrentTurnFlag();
      }
    }

    setRender(!isRender);
  };

  const onClose = () => {
    TicTacToeObj.setGameState(gameStateConfig.IN_PROGRESS);
    TicTacToeObj.clearFieldState();
    TicTacToeObj.changeCurrentTurnFlag();

    firstPlayer.clearTurns();
    secondPlayer.clearTurns();
    setRender(!isRender);
  };

  const currentTurnFlag = TicTacToeObj.getCurrentTurnFlag();
  const gameState = TicTacToeObj.getGameState();

  return (
    <Panel>
      <Sidebar />
      {gameState !== gameStateConfig.IN_PROGRESS ? (
        <GameResultModal
          onClose={onClose}
          resultTitle={
            gameState === gameStateConfig.DRAW
              ? "Ничья"
              : TicTacToeObj.getWinnerName()
          }
          gameState={gameState}
        />
      ) : null}

      <TableTitle turnFlag={currentTurnFlag}>
        {currentTurnFlag
          ? firstPlayer.getPlayerName()
          : secondPlayer.getPlayerName()}
        <span>- ваш ход!</span>
      </TableTitle>

      <TicTacToeField>
        {TicTacToeObj.getFieldState().map((item, itemIndex) => {
          if (!item) {
            return (
              <CellButton
                onClick={() => onMark(itemIndex)}
                key={itemIndex}
                disabled={gameState !== gameStateConfig.IN_PROGRESS}
              >
                {gameState === gameStateConfig.IN_PROGRESS ? (
                  <CellHoverContent>
                    {currentTurnFlag ? <CrossIcon /> : <ZeroIcon />}
                  </CellHoverContent>
                ) : null}
              </CellButton>
            );
          }

          if (item === ZERO) {
            return (
              <CellButton disabled={true} key={itemIndex}>
                <ZeroIcon />
              </CellButton>
            );
          }

          return (
            <CellButton disabled={true} key={itemIndex}>
              <CrossIcon />
            </CellButton>
          );
        })}

        <BorderTop />
        <BorderLeft />
        <BorderRight />
        <BorderBottom />
      </TicTacToeField>
    </Panel>
  );
};

export default TicTacToeOOP;
