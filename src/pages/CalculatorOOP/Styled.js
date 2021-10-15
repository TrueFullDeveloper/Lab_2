import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw - 384px);
  height: 100vh;

  padding-left: 384px;
  background: #534e4b;

  overflow: hidden;
`;

export const CalculatorWrapper = styled.div`
  position: relative;

  width: 636px;
  height: 85vh;

  padding: 32px;
  background: #534e4b;

  border-radius: 20px;
  border: 4px solid #2d2d2d;

  overflow: hidden;
`;

export const CalculatorFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  margin-bottom: 65px;

  width: calc(100% - 5px);
  height: 80px;
`;
export const CalculatorField = styled.div`
  display: flex;
  align-items: center;

  margin-right: 10px;

  width: calc(100% - 112px - 32px - 20px);
  height: 80px;

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

export const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: -4px;
  margin-top: 40px;

  width: 480px;
  height: 480px;
`;

export const DownButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: -4px;
`;

export const CalculatorButton = styled.button`
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

export const CalculateButton = styled(CalculatorButton)`
  width: 308px;
`;

export const OperationButton = styled(CalculatorButton)`
  margin: 5px;
`;

export const CancelButton = styled(CalculatorButton)`
  background: rgba(240, 7, 7, 0.63);
  width: 150px;
  height: 112px;

  &:hover {
    background: rgba(245, 41, 41, 0.63);
  }
`;

export const OperationsContainer = styled.div`
  position: absolute;
  top: 163px;
  right: 32px;

  display: flex;
  flex-direction: column;
  width: 164px;

  margin-top: 40px;
`;
