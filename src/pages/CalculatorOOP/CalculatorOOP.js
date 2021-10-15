import React, { useState } from "react";
import Sidebar from "componets/Sidebar";
import Calculator from "pages/CalculatorOOP/Calculator";
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

const CalculatorObj = new Calculator("");

const CalculatorOOP = () => {
  const [isRender, setRender] = useState(false);

  const onNumberClick = (value) => {
    CalculatorObj.setCalculatorField(value);

    setRender(!isRender);
  };

  const onOperationClick = (value) => {
    if (
      CalculatorObj.getOperations().indexOf(
        CalculatorObj.getCalculatorField().slice(-1)
      ) === -1 &&
      CalculatorObj.getCalculatorField() !== ""
    ) {
      CalculatorObj.setCalculatorField(value);
    } else if (value === "−" && CalculatorObj.getCalculatorField() === "") {
      CalculatorObj.setCalculatorField(value);
    }

    setRender(!isRender);
  };

  const onCalculate = () => {
    CalculatorObj.calculate();

    setRender(!isRender);
  };

  const onRemove = () => {
    CalculatorObj.removeCalculatorField();

    setRender(!isRender);
  };

  return (
    <CalculatorContainer>
      <Sidebar />
      <CalculatorWrapper>
        <CalculatorFieldContainer>
          <CalculatorField>
            <span>{CalculatorObj.getCalculatorField()}</span>
          </CalculatorField>

          <CancelButton onClick={onRemove}>
            <span>C</span>
          </CancelButton>
        </CalculatorFieldContainer>

        <NumberContainer>
          {CalculatorObj.getNumberCalculatorList().map(
            (numberItem, numberIndex) => (
              <CalculatorButton
                key={numberIndex}
                onClick={() => onNumberClick(numberItem)}
              >
                <span>{numberItem}</span>
              </CalculatorButton>
            )
          )}
        </NumberContainer>

        <OperationsContainer>
          {CalculatorObj.getOperations().map(
            (operationItem, operationIndex) => (
              <OperationButton
                key={operationIndex}
                onClick={() => onOperationClick(operationItem)}
              >
                <span>{operationItem}</span>
              </OperationButton>
            )
          )}
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

export default CalculatorOOP;
