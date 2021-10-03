import styled from "styled-components";
import { getInputWidth } from "utils/getInputWidth";

export const InputWrapper = styled.div`
  position: relative;

  > span {
    display: block;
    position: absolute;
    top: 32px;
    right: 12px;

    line-height: 24px;
    color: #777781;
  }
`;

export const Label = styled.label`
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  line-height: 0;
`;

export const Span = styled.span`
  position: absolute;
  top: 10px;
  left: 0;

  text-align: center;
  width: 100%;

  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;

  //font-family: "Roboto", monospace;
  font-size: 18px;
  font-weight: 700;
  color: #9b9797;
`;

const BaseInput = styled.input`
  outline: none;
  border: 4px solid #06486c;

  border-radius: 12px;
  background: transparent;

  padding: 20px 12px 20px;

  font-size: 22px;
  font-weight: 600;
  line-height: 20px;
  color: #e0e0e0;

  &:focus {
    outline: none;
  }

  &:focus + ${Span} {
    font-size: 22px;
    text-align: center;
    transform: translate3d(-116px, -55px, 0);

    color: #dfdede;

    &:after {
      content: ":";
    }
  }

  &:not(:placeholder-shown) + ${Span} {
    font-size: 22px;
    text-align: center;
    transform: translate3d(-116px, -55px, 0);

    color: #dfdede;

    &:after {
      content: ":";
    }
  }
`;

export const StyledInput = styled(BaseInput)`
  height: 16px;
  width: ${({ width }) => getInputWidth(width)};
`;
