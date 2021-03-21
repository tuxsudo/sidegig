import styled from "styled-components";

import { spacing16 } from "../style/variables";

interface Props {
  align: "start" | "center" | "end";
  gapSize?: string;
}

export const Row = styled.div<Props>`
  align-items: center;
  display: grid;
  justify-content: ${(props) => props.align || "start"};
  grid-auto-flow: column;
  gap: ${(props) => props.gapSize || spacing16};
`;
