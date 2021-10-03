import React from "react";
import Sidebar from "componets/Sidebar";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw - 384px);
  height: 100vh;

  padding-left: 384px;
  background: #534e4b;

  overflow: hidden;
`;

const CalculatorWrapper = styled.div`
  position: relative;

  width: 636px;
  height: 85vh;

  padding: 32px;
  background: #534e4b;

  border-radius: 20px;
  border: 4px solid #2d2d2d;

  overflow: hidden;
`;

const CalculatorFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 32px);
  height: 116px;
`;
const CalculatorField = styled.div`
  display: flex;
  align-items: center;

  width: calc(100% - 158px);
  height: 80px;
  margin-top: 20px;

  padding: 16px;
  background: #bfbfbf;

  border-radius: 5px;

  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  --moz-scrollbar-width: none;

  > span {
    display: flex;
    align-items: center;

    font-size: 56px;
    line-height: 65px;
    font-weight: 700;
    color: #2d2d2d;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: -4px;
  margin-top: 40px;

  width: 480px;
  height: 480px;
`;

const DownButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: -4px;
`;

const CalculatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  padding: 0;
  border: none;
  cursor: pointer;

  width: 150px;
  height: 150px;

  border-radius: 10px;

  margin: 4px;
  background: #2d2d2d;

  transition-duration: 0.3s;
  &:hover {
    background: rgba(45, 45, 45, 0.75);
  }

  > span {
    display: block;

    font-size: 56px;
    line-height: 65px;
    font-weight: 700;
    color: rgba(194, 193, 193, 0.84);
  }
`;

const CalculateButton = styled(CalculatorButton)`
  width: 308px;
`;

const OperationButton = styled(CalculatorButton)`
  margin: 5px;
`;

const CancelButton = styled(CalculatorButton)`
  background: rgba(240, 7, 7, 0.63);
  width: 112px;
  height: 112px;
  margin: auto;
`;

const OperationsContainer = styled.div`
  position: absolute;
  top: 163px;
  right: 32px;

  display: flex;
  flex-direction: column;
  width: 164px;

  margin-top: 40px;
`;

const Calculator = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["÷", "×", "-", "+"];

  return (
    <CalculatorContainer>
      <Sidebar />
      <CalculatorWrapper>
        <CalculatorFieldContainer>
          <CalculatorField>
            <span>12</span>
          </CalculatorField>

          <CancelButton>
            <span>C</span>
          </CancelButton>
        </CalculatorFieldContainer>

        <NumberContainer>
          {numbers.map((numberItem, numberIndex) => (
            <CalculatorButton key={numberIndex}>
              <span>{numberItem}</span>
            </CalculatorButton>
          ))}
        </NumberContainer>

        <OperationsContainer>
          {operations.map((operationItem, operationIndex) => (
            <OperationButton key={operationIndex}>
              <span>{operationItem}</span>
            </OperationButton>
          ))}
        </OperationsContainer>

        <DownButtonContainer>
          <CalculatorButton>
            <span>0</span>
          </CalculatorButton>

          <CalculateButton>
            <span>=</span>
          </CalculateButton>
        </DownButtonContainer>
      </CalculatorWrapper>
    </CalculatorContainer>
  );
};

export default Calculator;
