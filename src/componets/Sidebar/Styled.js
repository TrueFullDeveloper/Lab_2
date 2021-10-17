import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 380px;
  height: 100vh;

  background: #2d2d2d;

  box-sizing: border-box;
  border-right: 2px solid #3f3f3f;
`;

export const SidebarTitle = styled.span`
  display: block;

  width: 100%;
  text-align: center;
  padding-top: 20px;

  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  color: #f6f6f6;
`;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;

  width: calc(100% - 20px);
  height: 60px;
  padding-left: 20px;
  background: #3c3c3c;

  margin-bottom: 2px;

  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  line-height: 40px;
  color: #f6f6f6;

  &:hover {
    background: rgba(60, 60, 60, 0.69);
  }

  > img {
    display: block;
    width: 32px;
    height: 32px;

    margin-right: 20px;
  }
`;
