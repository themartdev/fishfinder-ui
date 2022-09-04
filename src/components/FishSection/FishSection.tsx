import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";
import StreamSection from "../StreamSection";

const SArrowFrames = keyframes`
  from {
    padding-left: 0;
  }

  to {
    padding-left: 12px;
  }
`;

const SGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 4.5fr 1fr 4.5fr;
  grid-template-rows: 450px;
  grid-gap: 1rem;
  align-items: center;
`;

const SConvertButton = styled.button`
  background: #17347e;
  font-family: inherit;
  font-size: 1rem;
  border: none;
  padding: 8px;
  border-radius: 10px;
  color: #eee;
  cursor: pointer;

  &:hover {
    background: #43588f;
    transition: background 0.2s ease-in;

    & > #animation-target {
      animation: ${SArrowFrames} 0.4s ease-in-out alternate infinite;
    }
  }
`;

const SArrowWrapper = styled.div`
  display: inline-block;
  width: 40px;
`;

export default function FishSection() {
  return (
    <SGridWrapper>
      <StreamSection />
      <SConvertButton>
        Find fishies
        <SArrowWrapper id="animation-target">
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "#FF6B00", fontSize: "1.2rem" }}
          />
        </SArrowWrapper>
      </SConvertButton>
      <div style={{ backgroundColor: "blue" }}>
        This section will contain the resulting image
      </div>
    </SGridWrapper>
  );
}
