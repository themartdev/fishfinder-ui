import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: #17347e;
`;

const StyledBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 2rem;
  font-family: "Hermeneus One";
  color: #fff;
`;

const StyledBrandingText = styled.span``;

export default function Header() {
  return (
    <StyledHeaderSection>
      <StyledBranding>
        <FontAwesomeIcon icon={faFish} style={{ color: "#FF6B00" }} />
        <StyledBrandingText>FishFinder</StyledBrandingText>
      </StyledBranding>
    </StyledHeaderSection>
  );
}
