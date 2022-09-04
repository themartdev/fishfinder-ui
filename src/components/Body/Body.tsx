import styled from "styled-components";
import { SContainer, SSection } from "../../style/styled-commons";
import FishSection from "../FishSection";
import TipSection from "../TipSection";
import { StylableComponentProps } from "../types";

const StyledBodySection = styled.div`
  background: linear-gradient(#17347e 15%, #ff6b00 100%);
`;

interface BodyProps extends StylableComponentProps {}

export default function Body(props: BodyProps) {
  return (
    <StyledBodySection {...props}>
      <TipSection />
      <SContainer>
        <SSection style={{ marginTop: "32px" }}>
          <FishSection />
        </SSection>
      </SContainer>
    </StyledBodySection>
  );
}
