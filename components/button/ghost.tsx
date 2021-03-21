import styled from "styled-components";
import {
  color1,
  color3,
  color5,
  colorPrimary,
  spacing4,
  spacing8,
} from "../style/variables";

export const GhostButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  color: ${color1};
  cursor: pointer;
  outline-color: ${colorPrimary};
  padding: ${spacing4} ${spacing8};

  &:hover {
    background-color: ${color3};
    color: ${color5};
  }

  &:active {
    background-color: ${colorPrimary};
    color: ${color1};
  }
`;
