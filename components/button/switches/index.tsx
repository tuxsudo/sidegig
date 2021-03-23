import styled from "styled-components";

import {
  colorBg0,
  colorBg2,
  colorFg1,
  colorPrimary,
  spacing4,
  spacing16,
} from "../../style/variables";

interface SwitchesProps {
  align?: "start" | "end" | "middle";
}
export const Switches = styled.div<SwitchesProps>`
  align-items: stretch;
  border-radius: 3px;
  display: flex;
  justify-content: ${(props) => props.align || "start"};
`;

interface ButtonProps {
  active?: boolean;
}
export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))<ButtonProps>`
  cursor: pointer;
  background-color: ${(props) => (props.active ? colorPrimary : colorBg2)};
  border: 0;
  color: ${(props) => (props.active ? "#fff" : colorFg1)};
  margin: 0;
  padding: ${spacing4} ${spacing16};

  &:hover {
    filter: brightness(1.5);
  }

  &:active {
    filter: brightness(0.75);
  }

  &:not(:first-child) {
    border-left: 1px solid ${colorBg0};
  }

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }
`;
