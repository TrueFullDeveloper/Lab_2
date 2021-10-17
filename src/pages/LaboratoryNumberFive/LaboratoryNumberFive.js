import React, { useEffect, useState } from "react";
import Sidebar from "componets/Sidebar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { pathConfig } from "config/router/pathConfig";

import {
  Square,
  Container,
  HorizontalLargeRectangle,
  HorizontalMediumRectangle,
  LayoutContainer,
  SecondWrapper,
  ThirdWrapper,
  VerticalRectangle,
  FirstWrapper,
} from "./Styled";

const defaultMargin = "50px";

const LaboratoryNumberFive = () => {
  const [currentKey, setCurrentKey] = useState(1);
  const { path } = useRouteMatch();

  const onKeyPressHandler = (event) => {
    if (path.indexOf("v2") === -1) return;

    if (event.keyCode === 37) {
      if (currentKey > 1) {
        setCurrentKey((currentKey) => currentKey - 1);
      } else {
        setCurrentKey(13);
      }
    }

    if (event.keyCode === 38) {
      switch (currentKey) {
        case 1:
          setCurrentKey(11);
          break;
        case 2:
          setCurrentKey(12);
          break;
        case 3:
          setCurrentKey(13);
          break;
        case 4:
          setCurrentKey(1);
          break;
        case 5:
          setCurrentKey(2);
          break;
        case 6:
          setCurrentKey(2);
          break;
        case 7:
          setCurrentKey(3);
          break;
        case 8:
          setCurrentKey(5);
          break;
        case 9:
          setCurrentKey(2);
          break;
        case 10:
          setCurrentKey(6);
          break;
        case 11:
          setCurrentKey(4);
          break;
        case 12:
          setCurrentKey(8);
          break;
        case 13:
          setCurrentKey(10);
          break;
        default:
          return null;
      }
    }

    if (event.keyCode === 39) {
      if (currentKey < 13) {
        setCurrentKey((currentKey) => currentKey + 1);
      } else {
        setCurrentKey(1);
      }
    }

    if (event.keyCode === 40) {
      switch (currentKey) {
        case 1:
          setCurrentKey(4);
          break;
        case 2:
          setCurrentKey(5);
          break;
        case 3:
          setCurrentKey(7);
          break;
        case 4:
          setCurrentKey(11);
          break;
        case 5:
          setCurrentKey(8);
          break;
        case 6:
          setCurrentKey(10);
          break;
        case 7:
          setCurrentKey(10);
          break;
        case 8:
          setCurrentKey(12);
          break;
        case 9:
          setCurrentKey(12);
          break;
        case 10:
          setCurrentKey(13);
          break;
        case 11:
          setCurrentKey(1);
          break;
        case 12:
          setCurrentKey(2);
          break;
        case 13:
          setCurrentKey(3);
          break;
        default:
          return null;
      }
    }

    if (event.keyCode === 13) {
      console.log("Click at rect ", currentKey);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler);

    return () => {
      document.removeEventListener("keydown", onKeyPressHandler);
    };
  }, [onKeyPressHandler]);

  const onBlockClick = (blockNumber) => {
    console.log("Click at rect ", blockNumber);
  };

  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route path={pathConfig.laboratoryNumberFiveV1} exact={true}>
          <LayoutContainer>
            <FirstWrapper>
              <Square
                onClick={() => onBlockClick(1)}
                additionalStyles={`margin-right: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>1</span>
              </Square>

              <HorizontalLargeRectangle
                onClick={() => onBlockClick(2)}
                additionalStyles={`margin-right: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>2</span>
              </HorizontalLargeRectangle>

              <Square
                onClick={() => onBlockClick(3)}
                additionalStyles={`margin-right: 130px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>3</span>
              </Square>
            </FirstWrapper>

            <VerticalRectangle
              onClick={() => onBlockClick(4)}
              additionalStyles={
                "&:hover { background: #ef9930; border: 2px solid #ef9930;}"
              }
            >
              <span>4</span>
            </VerticalRectangle>

            <ThirdWrapper>
              <SecondWrapper>
                <Square
                  onClick={() => onBlockClick(5)}
                  additionalStyles={`margin-left: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>5</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(6)}
                  additionalStyles={`margin-left: 200px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>6</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(7)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-right: 100px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>7</span>
                </Square>
              </SecondWrapper>

              <SecondWrapper>
                <Square
                  onClick={() => onBlockClick(8)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>8</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(9)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>9</span>
                </Square>

                <HorizontalMediumRectangle
                  onClick={() => onBlockClick(10)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin}; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
                >
                  <span>10</span>
                </HorizontalMediumRectangle>
              </SecondWrapper>
            </ThirdWrapper>

            <FirstWrapper>
              <Square
                onClick={() => onBlockClick(11)}
                additionalStyles={`margin-right: ${defaultMargin}; margin-top: -50px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>11</span>
              </Square>

              <Square
                onClick={() => onBlockClick(12)}
                additionalStyles={`margin-top: -50px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>12</span>
              </Square>

              <Square
                onClick={() => onBlockClick(13)}
                additionalStyles={`margin-left: 350px; margin-top: -50px; &:hover { background: #ef9930; border: 2px solid #ef9930;}`}
              >
                <span>13</span>
              </Square>
            </FirstWrapper>
          </LayoutContainer>
        </Route>

        <Route path={pathConfig.laboratoryNumberFiveV2} exact={true}>
          <LayoutContainer>
            <FirstWrapper>
              <Square
                onClick={() => onBlockClick(1)}
                additionalStyles={`margin-right: ${defaultMargin};`}
                isActive={currentKey === 1}
              >
                <span>1</span>
              </Square>

              <HorizontalLargeRectangle
                onClick={() => onBlockClick(2)}
                additionalStyles={`margin-right: ${defaultMargin};`}
                isActive={currentKey === 2}
              >
                <span>2</span>
              </HorizontalLargeRectangle>

              <Square
                onClick={() => onBlockClick(3)}
                additionalStyles={`margin-right: 130px;`}
                isActive={currentKey === 3}
              >
                <span>3</span>
              </Square>
            </FirstWrapper>

            <VerticalRectangle
              onClick={() => onBlockClick(4)}
              isActive={currentKey === 4}
            >
              <span>4</span>
            </VerticalRectangle>

            <ThirdWrapper>
              <SecondWrapper>
                <Square
                  onClick={() => onBlockClick(5)}
                  additionalStyles={`margin-left: ${defaultMargin};`}
                  isActive={currentKey === 5}
                >
                  <span>5</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(6)}
                  additionalStyles={`margin-left: 200px;`}
                  isActive={currentKey === 6}
                >
                  <span>6</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(7)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-right: 100px;`}
                  isActive={currentKey === 7}
                >
                  <span>7</span>
                </Square>
              </SecondWrapper>

              <SecondWrapper>
                <Square
                  onClick={() => onBlockClick(8)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin};`}
                  isActive={currentKey === 8}
                >
                  <span>8</span>
                </Square>

                <Square
                  onClick={() => onBlockClick(9)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin};`}
                  isActive={currentKey === 9}
                >
                  <span>9</span>
                </Square>

                <HorizontalMediumRectangle
                  onClick={() => onBlockClick(10)}
                  additionalStyles={`margin-left: ${defaultMargin}; margin-top: ${defaultMargin};`}
                  isActive={currentKey === 10}
                >
                  <span>10</span>
                </HorizontalMediumRectangle>
              </SecondWrapper>
            </ThirdWrapper>

            <FirstWrapper>
              <Square
                onClick={() => onBlockClick(11)}
                additionalStyles={`margin-right: ${defaultMargin}; margin-top: -50px;`}
                isActive={currentKey === 11}
              >
                <span>11</span>
              </Square>

              <Square
                onClick={() => onBlockClick(12)}
                additionalStyles={`margin-top: -50px;`}
                isActive={currentKey === 12}
              >
                <span>12</span>
              </Square>

              <Square
                onClick={() => onBlockClick(13)}
                additionalStyles={`margin-left: 350px; margin-top: -50px;`}
                isActive={currentKey === 13}
              >
                <span>13</span>
              </Square>
            </FirstWrapper>
          </LayoutContainer>
        </Route>

        <Redirect to={pathConfig.laboratoryNumberFiveV1} />
      </Switch>
    </Container>
  );
};

export default LaboratoryNumberFive;
