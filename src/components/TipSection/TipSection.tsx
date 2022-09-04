import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SContainer, SSection } from "../../style/styled-commons";

const StyledSubtitle = styled.div`
  color: #0f7dba;
  font-size: 1.6rem;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const StyledParagraph = styled.p`
  line-height: 1.2rem;
`;

const SHideTipButton = styled.button`
  background: #17347e;
  font-family: inherit;
  font-size: 0.9rem;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  color: #eee;
  cursor: pointer;
  position: absolute;
  right: 24px;
  bottom: 12px;

  &:hover {
    background: #43588f;
  }
`;

export default function TipSection() {
  return (
    <SContainer>
      <SSection
        style={{ marginTop: "32px", position: "relative", paddingBottom: 64 }}
      >
        <StyledSubtitle>
          <FontAwesomeIcon icon={faQuestionCircle} /> How it works{" "}
        </StyledSubtitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </StyledParagraph>
        <SHideTipButton>Hide tip</SHideTipButton>
      </SSection>
    </SContainer>
  );
}
