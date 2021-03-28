import styled from "styled-components";
import { colorFg0, colorPrimary } from "../../style/variables";

import { Button } from "../lib";

export const GhostButton = styled(Button)`
  background-color: transparent;
  color: ${colorFg0};
  outline-color: ${colorPrimary};

  &:hover,
  &:active {
    background-color: ${colorPrimary};
    color: white;
  }

  &:active {
    filter: brightness(0.75);
  }
`;
