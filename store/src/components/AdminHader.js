import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AdminNav from "./AdminNav";
import Logo from '../LOGO/L1.png'

const AdminHeader = () => {
  return (
    <MainHeader>
      <NavLink to="/admin">
        <img className="logo" src={Logo} alt="Fashionista's Haven" />
      </NavLink>
      <AdminNav />
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
export default AdminHeader;