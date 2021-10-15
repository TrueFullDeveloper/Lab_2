import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { pathConfig } from "config/router/pathConfig";
import Input from "componets/Input";

import {
  LoginWrapper,
  LoginForm,
  LoginTitle,
  ErrorMessage,
  FirstPlayerContainer,
  SecondPlayerContainer,
  LoginButton,
  LoginContainer,
} from "./Styled";
import { USER_INFORMATION } from "config/localStorageConfig";
import Sidebar from "componets/Sidebar";

const AuthPlayers = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      firstPlayer: "",
      secondPlayer: "",
    },

    validationSchema: yup.object({
      firstPlayer: yup.string().required("Напишите ваши именна"),
      secondPlayer: yup.string().required("Напишите ваши именна"),
    }),

    onSubmit: ({ firstPlayer, secondPlayer }) => {
      localStorage.setItem(
        USER_INFORMATION,
        JSON.stringify({
          firstPlayer: firstPlayer,
          secondPlayer: secondPlayer,
        })
      );

      if (path.indexOf(pathConfig.authPlayers) === -1) {
        history.push(pathConfig.ticTacToe);
      } else {
        history.push(pathConfig.ticTacToeOOP);
      }
    },
  });

  return (
    <LoginContainer>
      <Sidebar />
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginTitle>Крестики нолики</LoginTitle>

          <FirstPlayerContainer>
            <Input
              width={381}
              placeholder={"Первый игрок"}
              type="text"
              id="firstPlayer"
              name="firstPlayer"
              value={values.firstPlayer}
              onChange={handleChange}
            />
          </FirstPlayerContainer>

          <SecondPlayerContainer>
            <Input
              width={381}
              placeholder={"Второй игрок"}
              type="text"
              id="secondPlayer"
              name="secondPlayer"
              value={values.secondPlayer}
              onChange={handleChange}
            />
          </SecondPlayerContainer>
          {(touched.firstPlayer && errors.firstPlayer) ||
          (touched.secondPlayer && errors.secondPlayer) ? (
            <ErrorMessage>
              {errors.firstPlayer || errors.secondPlayer}
            </ErrorMessage>
          ) : null}

          <LoginButton type="submit">Начать</LoginButton>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default AuthPlayers;
