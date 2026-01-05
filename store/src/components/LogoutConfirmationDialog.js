import React from "react";
import { Button } from "../Styles/Button";
import styled from "styled-components";

const LogoutConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <Wrapper>
    <div className="logout-confirmation-dialog">
      <p style={{color: "white"}}>Are you sure you want to logout?</p>
      <div className="buttons">
        <Button className="yes" onClick={onConfirm}>Yes</Button>
        <Button className="no" onClick={onCancel}>No</Button>
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.logout-confirmation-dialog {
    background-color: gray;
    padding: 20px;
    width: 80ch;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    /* Positioning */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
  
  
  .buttons {
    margin-top: 20px;
  }
  .yes{
    background-color: red;
  }
  .no{
    background-color: green;
    margin-left: 10ch;
  }
  
`

export default LogoutConfirmationDialog;
