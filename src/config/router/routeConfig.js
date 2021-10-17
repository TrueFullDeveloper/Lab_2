import { lazy } from "react";

import { pathConfig } from "config/router/pathConfig";
import { roleConfig } from "config/router/roleConfig";

export const routeConfig = [
  {
    path: pathConfig.main,
    component: lazy(() => import("pages/AuthPlayers")),
    protected: false,
    exact: true,
  },
  {
    path: pathConfig.authPlayers,
    component: lazy(() => import("pages/AuthPlayers")),
    protected: false,
    exact: true,
  },
  {
    path: pathConfig.ticTacToe,
    component: lazy(() => import("pages/TicTacToe")),
    protected: true,
    exact: true,
    roles: [roleConfig.user],
  },
  {
    path: pathConfig.ticTacToeOOP,
    component: lazy(() => import("pages/TicTacTieOOP")),
    protected: true,
    exact: true,
    roles: [roleConfig.user],
  },
  {
    path: pathConfig.calculator,
    component: lazy(() => import("pages/Calculator")),
    protected: true,
    exact: true,
    roles: [roleConfig.user],
  },
  {
    path: pathConfig.calculatorOOP,
    component: lazy(() => import("pages/CalculatorOOP")),
    protected: true,
    exact: true,
    roles: [roleConfig.user],
  },
  {
    path: pathConfig.laboratoryNumberFive,
    component: lazy(() => import("pages/LaboratoryNumberFive")),
    protected: true,
    exact: false,
    roles: [roleConfig.user],
  },
];
