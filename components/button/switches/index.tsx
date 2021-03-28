import styled from "styled-components";

import {
  colorBg0,
  colorBg2,
  colorFg1,
  colorPrimary,
  spacing4,
  spacing16,
} from "../../style/variables";

import { Button as BaseButton } from "../lib";

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
export const Button = styled(BaseButton)<ButtonProps>`
  cursor: pointer;
  background-color: ${(props) => (props.active ? colorPrimary : colorBg2)};
  border: 0;
  border-radius: 0;
  color: ${(props) => (props.active ? "#fff" : colorFg1)};
  margin: 0;
  padding: ${spacing4} ${spacing16};

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
