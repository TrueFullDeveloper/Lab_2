import React from "react";
import { pathConfig } from "config/router/pathConfig";

import { SidebarItem, SidebarTitle, SidebarContainer } from "./Styled";

import TicTacToeIcon from "static/images/tic-tac-toe.svg";
import CalculatorIcon from "static/images/calculator.svg";
import VariantIcon from "static/images/bookmark-variant.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Лабораторная #2</SidebarTitle>

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

      <SidebarTitle>Лабораторная #5</SidebarTitle>
      <SidebarItem to={pathConfig.laboratoryNumberFive}>
        <img src={VariantIcon} alt={""} />
        Вариант №1
      </SidebarItem>

      <SidebarItem to={pathConfig.laboratoryNumberFiveV2}>
        <img src={VariantIcon} alt={""} />
        Вариант №2
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
