import styled from "styled-components";
import { spacing8, spacing16 } from "../../style/variables";
import { Fill } from "../fill";

interface LinesProps {
  gapSize?: string;
  lineHeight?: string;
}
export const Lines = styled.div<LinesProps>`
  display: grid;
  gap: ${(props) => props.gapSize || spacing8};
  place-items: stretch;
  place-content: stretch;

  & > * {
    min-height: ${(props) => props.lineHeight || spacing16};
  }
`;

export const Line = Fill;
