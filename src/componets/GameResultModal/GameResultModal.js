import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import WinCup from "static/images/trophy.svg";
import Handshake from "static/images/handshake.svg";
import { gameStateConfig } from "config/ticTacToeConfig";

import {
  GameResultContainer,
  ResultIcon,
  ResultInformationContainer,
  ResultTitle,
  ConfirmationButton,
} from "./Styled";

const GameResultModal = ({ onClose, resultTitle, gameState }) => {
  const gameResult = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(gameResult.current);

    return () => {
      document.body.removeChild(gameResult.current);
      return;
    };
  }, []);

  return createPortal(
    <GameResultContainer>
      <ResultInformationContainer>
        <div>
          <ResultTitle>
            {gameState === gameStateConfig.DRAW
              ? resultTitle
              : "Победил игрок " + resultTitle}
          </ResultTitle>

          <ResultIcon
            src={gameState === gameStateConfig.DRAW ? Handshake : WinCup}
            alt={""}
          />
          <ConfirmationButton onClick={onClose}>Ок</ConfirmationButton>
        </div>
      </ResultInformationContainer>
    </GameResultContainer>,
    gameResult.current
  );
};

export default GameResultModal;
