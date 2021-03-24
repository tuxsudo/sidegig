import styled from "styled-components";

import { colorFg0, colorPrimary, fontSize16 } from "../../style/variables";

interface Props {
  active?: boolean;
}

export const Link = styled.a<Props>`
  color: ${(props) => (props.active ? colorPrimary : colorFg0)};
  cursor: pointer;
  font-size: ${fontSize16};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-decoration: none;

  &:hover {
    filter: brightness(1.5);
  }

  &:active {
    filter: brightness(0.75);
  }
`;

export const FauxLink = styled.button<Props>`
  background: transparent;
  border: 0;
  color: ${(props) => (props.active ? colorPrimary : colorFg0)};
  cursor: pointer;
  font-size: ${fontSize16};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-decoration: none;

  &:hover {
    color: ${colorPrimary};
    text-decoration: underline;
  }
`;
