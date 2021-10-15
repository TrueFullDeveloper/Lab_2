import React, { useState } from "react";
import Sidebar from "componets/Sidebar";
import {
  CalculatorFieldContainer,
  CalculatorButton,
  CancelButton,
  CalculatorField,
  CalculatorContainer,
  CalculatorWrapper,
  NumberContainer,
  DownButtonContainer,
  OperationButton,
  OperationsContainer,
  CalculateButton,
} from "./Styled";

const Calculator = () => {
  const [fieldState, setFieldState] = useState("");

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["÷", "×", "−", "+"];

  const onNumberClick = (value) => {
    setFieldState(fieldState + value);
  };

  const onOperationClick = (value) => {
    if (operations.indexOf(fieldState.slice(-1)) === -1 && fieldState !== "") {
      setFieldState(fieldState + value);
    } else if (value === "−" && fieldState === "") {
      setFieldState(fieldState + value);
    }
  };

  const onCalculate = () => {
    if (fieldState === "") return;

    let numberList = fieldState
      .split(/[÷×−+]/)
      .map((numberItem) => Number(numberItem));

    let operationList = fieldState
      .split(/[0-9]/)
      .filter((item) => operations.indexOf(item) + 1);

    if (operationList.length === 0) return;
    if (operationList.length >= numberList.length) {
      operationList.splice(-1, 1);
    }

    let i = 0;

    while (i < operationList.length) {
      if (operationList[i] === "÷") {
        numberList[i] = numberList[i] / numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else if (operationList[i] === "×") {
        numberList[i] = numberList[i] * numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }

    i = 0;

    while (i < operationList.length) {
      if (operationList[i] === "+") {
        numberList[i] = numberList[i] + numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else if (operationList[i] === "−") {
        numberList[i] = numberList[i] - numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }

    setFieldState(numberList[0].toString());
  };

  const onRemove = () => {
    setFieldState("");
  };

  return (
    <CalculatorContainer>
      <Sidebar />
      <CalculatorWrapper>
        <CalculatorFieldContainer>
          <CalculatorField>
            <span>{fieldState}</span>
          </CalculatorField>

          <CancelButton onClick={onRemove}>
            <span>C</span>
          </CancelButton>
        </CalculatorFieldContainer>

        <NumberContainer>
          {numbers.map((numberItem, numberIndex) => (
            <CalculatorButton
              key={numberIndex}
              onClick={() => onNumberClick(numberItem)}
            >
              <span>{numberItem}</span>
            </CalculatorButton>
          ))}
        </NumberContainer>

        <OperationsContainer>
          {operations.map((operationItem, operationIndex) => (
            <OperationButton
              key={operationIndex}
              onClick={() => onOperationClick(operationItem)}
            >
              <span>{operationItem}</span>
            </OperationButton>
          ))}
        </OperationsContainer>

        <DownButtonContainer>
          <CalculatorButton onClick={() => onNumberClick("0")}>
            <span>0</span>
          </CalculatorButton>

          <CalculateButton onClick={onCalculate}>
            <span>=</span>
          </CalculateButton>
        </DownButtonContainer>
      </CalculatorWrapper>
    </CalculatorContainer>
  );
};

export default Calculator;
