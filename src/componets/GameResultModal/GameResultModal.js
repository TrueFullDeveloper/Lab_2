import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

import WinCup from "static/images/trophy.svg";
import Handshake from "static/images/handshake.svg";
import { gameStateConfig } from "config/ticTacToeConfig";

const ResultAnimation = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;

const GameResultContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const ResultInformationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40%;
  height: 45%;

  > div {
    padding: 20px;
    background: #534e4b;

    border-radius: 20px;

    animation-name: ${ResultAnimation};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
`;

const ResultTitle = styled.span`
  display: block;
  width: 100%;

  margin: auto;

  text-align: center;
  font-size: 46px;
  font-weight: 500;
  color: white;

  animation-name: ${ResultAnimation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

const ResultIcon = styled.img`
  display: block;
  margin: 40px auto;

  width: 200px;
  height: 200px;

  animation-name: ${ResultAnimation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

const ConfirmationButton = styled.button`
  display: block;

  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  width: 100px;
  height: 40px;
  background: #34b1e4;
  border-radius: 5px;

  margin: auto;

  font-size: 16px;
  font-weight: 600;
  color: white;

  &:hover {
    background: #36bbf1;
  }
`;

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
