import React from 'react'
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from 'react-router-dom';



const FeedBackBtn = () => {
    const location = useLocation();
    const isAdminPage = location.pathname.includes("/admin");
    const isLogin = location.pathname.includes("/login");
    const isCart = location.pathname.includes("/cart");
    const isSelectAddress = location.pathname.includes("/selectaddress");
    const isEditSelectAddress = location.pathname.includes("/s-edit-address");
    const isAddSelectAddress = location.pathname.includes("/s-add-new-user-address");
    const isPayment = location.pathname.includes("/payment");
  return (
   
        <Wrapper>
            <NavLink to="/feedback">
         
            {!isAdminPage && !isLogin && !isPayment && !isCart && !isEditSelectAddress && !isAddSelectAddress && !isSelectAddress && <Button className="top-btn">Feedback</Button>}
            </NavLink>
        </Wrapper>
        
  )
}


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    width: 10rem;
    height: 3rem;
    color: #fff;
    background-color: black;
    box-shadow: ${({ theme }) => theme.colors.shadow};
   
    position: fixed;
    bottom: 5rem;
    left: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: gototop 1.2s linear infinite alternate-reverse;

   

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      left: 0;
      right: 40%;
    }
  }
`;

export default FeedBackBtn