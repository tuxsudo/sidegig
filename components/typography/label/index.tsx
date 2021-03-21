import styled from "styled-components";

import { colorFg0, colorPrimary, fontSize16 } from "../../style/variables";

export const Label = styled.label`
  color: ${colorFg0};
  cursor: pointer;
  font-size: ${fontSize16};

  &:hover {
    color: ${colorPrimary};
    text-decoration: underline;
  }
`;
