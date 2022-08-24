import styled from "styled-components";
import { SContainer } from "../../style/styled-commons";
import { StylableComponentProps } from "../types";

const StyledBodySection = styled.div`
  background: linear-gradient(#17577e 10%, #c5bcb7 100%);
`;

interface BodyProps extends StylableComponentProps {}

export default function Body(props: BodyProps) {
  return (
    <StyledBodySection {...props}>
      <SContainer>d</SContainer>
    </StyledBodySection>
  );
}
