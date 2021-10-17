import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw - 384px);
  height: 100vh;

  padding-left: 384px;

  overflow: hidden;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 800px;
  min-width: 800px;
  height: 600px;
  min-height: 600px;
  max-height: max-content;
`;

const BaseBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #777777;

  background: transparent;

  transition-duration: 0.3s;

  > span {
    display: block;
    font-size: 22px;
    font-weight: 500;
    color: #f6f6f6;
  }

  ${({ additionalStyles }) => (additionalStyles ? additionalStyles : null)};

  ${({ isActive }) =>
    isActive ? "background: #ef9930; border: 2px solid #ef9930;" : null};
`;

export const Square = styled(BaseBlock)`
  width: 100px;
  min-width: 100px;
  height: 100px;
`;

export const HorizontalLargeRectangle = styled(BaseBlock)`
  width: 400px;
  min-width: 400px;
  height: 100px;
`;

export const HorizontalMediumRectangle = styled(BaseBlock)`
  width: 250px;
  height: 100px;
`;

export const VerticalRectangle = styled(BaseBlock)`
  width: 100px;
  height: 250px;

  margin-top: 25px;
`;

export const FirstWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 50px;

  width: 80%;
  height: 250px;
`;
