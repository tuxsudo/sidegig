import styled from "styled-components";
import {
  colorFg0,
  colorPrimary,
  spacing4,
  spacing8,
} from "../../style/variables";

export const GhostButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  color: ${colorFg0};
  cursor: pointer;
  outline-color: ${colorPrimary};
  padding: ${spacing4} ${spacing8};

  &:hover,
  &:active {
    background-color: ${colorPrimary};
    color: white;
  }

  &:active {
    filter: opacity(0.75);
  }
`;
