import React from "react";
import styled from "styled-components";

const SmallFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopyright>
          <p>
            Copyright © 2024. Designed By: Fashionista's Haven.Pvt.Ltd |
            All Rights Reserved.
          </p>
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #004658;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  a {
    color: #fff;
    text-decoration: none;
  }
  p{
    color: #fff;
  }
`;

export default SmallFooter;
