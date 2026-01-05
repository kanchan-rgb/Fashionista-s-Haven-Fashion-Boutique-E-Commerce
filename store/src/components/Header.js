import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="../images/LOGO/L1.png" alt="Fashionista's Haven" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: #d8e7f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    width: 20rem;
    height: 7.5rem;
    margin-top: -5px;
  }
`;
export default Header;