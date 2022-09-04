import React from "react";
import styled from "styled-components";

const SPlayerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function StreamSection() {
  return (
    <SPlayerWrapper>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xnTbDytx-Aw?autoplay=1"
        title="lofi hip hop radio - beats to relax/study to"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </SPlayerWrapper>
  );
}
