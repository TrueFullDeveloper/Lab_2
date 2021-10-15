import styled from "styled-components";

export const Panel = styled.div`
  width: calc(100vw - 384px);
  height: 100vh;
  padding-left: 384px;

  background: #534e4b;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
`;

export const TicTacToeField = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: relative;
  width: 600px;
  height: 600px;

  margin-left: auto;
  margin-right: auto;
`;

const TicTacToeFieldBorder = styled.div`
  position: absolute;
  background: #534e4b;
`;

export const BorderTop = styled(TicTacToeFieldBorder)`
  width: 100%;
  height: 2px;

  top: 0;
  left: 0;
`;

export const BorderLeft = styled(TicTacToeFieldBorder)`
  width: 2px;
  height: 100%;

  top: 0;
  left: 0;
`;

export const BorderBottom = styled(TicTacToeFieldBorder)`
  width: 100%;
  height: 2px;

  bottom: 0;
  left: 0;
`;

export const BorderRight = styled(TicTacToeFieldBorder)`
  width: 2px;
  height: 100%;

  top: 0;
  right: 0;
`;

export const CellHoverContent = styled.div`
  opacity: 0;
  transition-duration: 0.5s;
`;

export const CellButton = styled.button`
  width: 200px;
  height: 200px;

  outline: none;
  padding: 0;
  background: transparent;
  cursor: pointer;

  margin: 0;

  border: 1px solid #706968;

  color: black;

  svg {
    width: 150px;
    height: 150px;
  }

  &:hover {
    ${CellHoverContent} {
      opacity: 0.1;
    }
  }

  &:disabled {
    cursor: default;
  }
`;

const TableTitleBase = styled.span`
  display: block;
  width: 100%;
  height: 200px;
  padding-top: 60px;

  text-align: center;
  font-size: 56px;
  font-weight: 500;

  > span {
    color: #fff2ff;
  }
`;

export const TableTitle = styled(TableTitleBase)`
  color: ${({ turnFlag }) => (turnFlag ? "#FCDD76" : "#34b1e4")};
`;
