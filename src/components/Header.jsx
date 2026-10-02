import React from "react";
import styled from "styled-components";

import mainLogo from "../assets/mainLogo.png";

const HeaderContainer = styled.header`
  width: 100%;

  height: 110px;

  background: white;

  display: flex;

  align-items: center;

  padding: 8px 4%;

  border-bottom: 1px solid #e1ebe6;

  box-shadow:
    0 4px 14px
    rgba(0, 70, 40, 0.08);

  @media (max-width: 600px) {
    height: 90px;

    padding: 7px 18px;
  }
`;

const HeaderInner = styled.div`
  width: 100%;

  max-width: 1400px;

  margin: 0 auto;

  display: flex;

  align-items: center;
`;

const Logo = styled.img`
  width: 155px;

  height: auto;

  display: block;

  object-fit: contain;

  /* No shadow around logo */

  @media (max-width: 768px) {
    width: 135px;
  }

  @media (max-width: 480px) {
    width: 115px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo
          src={mainLogo}
          alt="Green Flag Bus Booking App"
        />
      </HeaderInner>
    </HeaderContainer>
  );
}