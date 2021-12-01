import React, { useEffect, useMemo, useState } from "react";
import CrossIcon from "componets/Icons/CrossIcon";
import ZeroIcon from "componets/Icons/ZeroIcon";
import { getWinCombanations } from "utils/getWinCombanations";
import GameResultModal from "componets/GameResultModal";
import { checkWin } from "utils/checkWin";
import Sidebar from "componets/Sidebar";
import {
  ZERO,
  CROSS,
  FIELD_SIZE,
  gameStateConfig,
} from "config/ticTacToeConfig";
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

let winnerName;

const TicTacToe = () => {
  const [turnFlag, setTurnFlag] = useState(true);
  const [gameState, setGameState] = useState(gameStateConfig.IN_PROGRESS);

  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem(USER_INFORMATION));

    setFirstPlayer(userInformation.firstPlayer);
    setSecondPlayer(userInformation.secondPlayer);
  }, []);

  const fieldState = useMemo(() => {
    return new Array(FIELD_SIZE * FIELD_SIZE).fill("");
  }, [gameState]);

  const winCombinationList = useMemo(() => {
    return getWinCombanations(FIELD_SIZE);
  }, [gameState]);

  let firstPlayerTurns = useMemo(() => [], [gameState]);
  let secondPlayerTurns = useMemo(() => [], [gameState]);

  const onMark = (index) => {
    fieldState[index] = turnFlag ? CROSS : ZERO;

    if (turnFlag) {
      firstPlayerTurns.push(index);
    } else {
      secondPlayerTurns.push(index);
    }

    if (
      checkWin(
        turnFlag ? firstPlayerTurns : secondPlayerTurns,
        winCombinationList
      )
    ) {
      if (turnFlag) {
        winnerName = firstPlayer;
      } else {
        winnerName = secondPlayer;
      }

      setGameState(gameStateConfig.FINISH);
    } else {
      if (firstPlayerTurns.length + secondPlayerTurns.length === FIELD_SIZE * FIELD_SIZE) {
        setGameState(gameStateConfig.DRAW);
      } else {
        setTurnFlag(!turnFlag);
      }
    }
  };

  return (
    <Panel>
      <Sidebar />
      {gameState !== gameStateConfig.IN_PROGRESS ? (
        <GameResultModal
          onClose={() => setGameState(gameStateConfig.IN_PROGRESS)}
          resultTitle={
            gameState === gameStateConfig.DRAW ? "Ничья" : winnerName
          }
          gameState={gameState}
        />
      ) : null}

      <TableTitle turnFlag={turnFlag}>
        {turnFlag ? firstPlayer : secondPlayer} <span>- ваш ход!</span>
      </TableTitle>

      <TicTacToeField>
        {fieldState.map((item, itemIndex) => {
          if (!item) {
            return (
              <CellButton
                onClick={() => onMark(itemIndex)}
                key={itemIndex}
                disabled={gameState !== gameStateConfig.IN_PROGRESS}
              >
                {gameState === gameStateConfig.IN_PROGRESS ? (
                  <CellHoverContent>
                    {turnFlag ? <CrossIcon /> : <ZeroIcon />}
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

export default TicTacToe;
