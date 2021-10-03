import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw - 384px);
  height: 100vh;

  padding-left: 384px;
  background: #534e4b;

  overflow: hidden;
`;

export const LoginForm = styled.form`
  width: 500px;
  padding-bottom: 25px;
  padding-top: 25px;
  min-height: 375px - 24px - 12px; // Padding bottom + top

  background: #030303;
  border-radius: 8px;
`;

export const LoginWrapper = styled.div`
  width: 429px;
`;

export const FirstPlayerContainer = styled.div`
  margin: 46px 0 auto;
  text-align: center;

  input {
    border: 4px solid rgba(252, 221, 118, 0.8);
  }
`;

export const SecondPlayerContainer = styled.div`
  margin: 46px 0 auto;
  text-align: center;
`;

export const LoginTitle = styled.span`
  display: block;

  width: 100%;
  text-align: center;
  margin: auto auto 55px;

  font-size: 38px;
  font-weight: 700;
  line-height: 40px;
  color: #e0e0e0;
`;

export const ErrorMessage = styled.span`
  display: block;
  margin: 16px auto;

  width: 381px;
  text-align: center;

  font-size: 26px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(224, 18, 18, 0.77);
`;

export const LoginButton = styled.button`
  display: block;
  margin: 25px auto 0;

  outline: none;
  border: none;
  cursor: pointer;

  background: #144d6d;
  border-radius: 4px;
  padding: 15px 27px;

  font-size: 18px;
  font-weight: 500;

  color: #e0e0e0;

  transition-duration: 0.5s;
  &:hover {
    background: #146490;
    transform: scale(1.1);
  }
`;
