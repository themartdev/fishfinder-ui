import {
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SContainer, SSection } from "../../style/styled-commons";
import FishSection from "../FishSection";
import { StylableComponentProps } from "../types";

const StyledBodySection = styled.div`
  background: linear-gradient(#17577e 10%, #c5bcb7 100%);
`;

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

interface BodyProps extends StylableComponentProps {}

export default function Body(props: BodyProps) {
  return (
    <StyledBodySection {...props}>
      <SContainer>
        <SSection style={{ marginTop: "32px" }}>
          <StyledSubtitle>
            <FontAwesomeIcon icon={faQuestionCircle} /> How it works{" "}
          </StyledSubtitle>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledParagraph>
        </SSection>
      </SContainer>
      <SContainer>
        <SSection style={{ marginTop: "32px" }}>
          <FishSection />
        </SSection>
      </SContainer>
    </StyledBodySection>
  );
}
