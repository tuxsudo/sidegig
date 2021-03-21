import styled from "styled-components";

import { spacing16 } from "../style/variables";

interface Props {
  gapSize?: string;
}

export const Stack = styled.div<Props>`
  display: grid;
  gap: ${(props) => props.gapSize || spacing16};
`;
