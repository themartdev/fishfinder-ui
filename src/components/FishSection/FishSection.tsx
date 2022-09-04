import React from "react";
import styled from "styled-components";
import StreamSection from "../StreamSection";

const SGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 4.5fr 1fr 4.5fr;
  grid-template-rows: 450px;
  grid-gap: 1rem;
  align-items: center;
`;

export default function FishSection() {
  return (
    <SGridWrapper>
      <StreamSection />
      <div style={{ backgroundColor: "red" }}>asdf</div>
      <div style={{ backgroundColor: "blue" }}>asdf</div>
    </SGridWrapper>
  );
}
