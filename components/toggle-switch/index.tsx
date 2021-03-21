import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { colorBg2, colorNeutral, colorPrimary } from "../style/variables";
import { A11y } from "../button/a11y";

const Circle = styled.i<{ active?: boolean }>`
  background: ${(props) => (props.active ? colorPrimary : colorNeutral)};
  border-radius: 50%;
  display: block;
  height: 1em;
  margin-top: -0.125em;
  transform: ${(props) => (props.active ? "translateX(0.75em)" : "none")};
  transition: transform 200ms ease-out;
  width: 1em;
`;

const Groove = styled(A11y)`
  background: ${colorBg2};
  border-radius: 5px;
  cursor: pointer;
  height: 0.75em;
  width: 1.75em;
`;

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const ToggleSwitch = ({ active, ...props }: Props) => (
  <Groove {...props}>
    <Circle active={active} />
  </Groove>
);
