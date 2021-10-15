import React from "react";
import { pathConfig } from "config/router/pathConfig";

import { SidebarItem, SidebarTitle, SidebarContainer } from "./Styled";

import TicTacToeIcon from "static/images/tic-tac-toe.svg";
import CalculatorIcon from "static/images/calculator.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Лаборатоная #2</SidebarTitle>

      <SidebarItem to={pathConfig.main}>
        <img src={TicTacToeIcon} alt={""} />
        Крестики нолики - ПП
      </SidebarItem>

      <SidebarItem to={pathConfig.calculator}>
        <img src={CalculatorIcon} alt={""} />
        Калькулятор - ПП
      </SidebarItem>

      <SidebarItem to={pathConfig.authPlayers}>
        <img src={TicTacToeIcon} alt={""} />
        Крестики нолики - ООП
      </SidebarItem>

      <SidebarItem to={pathConfig.calculatorOOP}>
        <img src={CalculatorIcon} alt={""} />
        Калькулятор - ООП
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
