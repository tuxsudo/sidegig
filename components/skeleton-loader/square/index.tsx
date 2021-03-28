import styled, { keyframes } from "styled-components";
import { spacing64, colorBg2 } from "../../style/variables";

const kf = keyframes`
  from {
    transform: translateX(-100%);
  }
  to   {
    transform: translateX(200%);
  }
`;

interface SquareProps {
  size?: string;
}
export const Square = styled.i<SquareProps>`
  background: ${colorBg2};
  display: block;
  height: ${(props) => props.size || spacing64};
  width: ${(props) => props.size || spacing64};
  overflow: hidden;

  &::before {
    animation: 2000ms ${kf} cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colorBg2} 50%,
      transparent 100%
    );
    content: "";
    display: block;
    filter: brightness(1.25);
    transform: translateX(10%);
    height: ${(props) => props.size || spacing64};
    width: ${(props) => props.size || spacing64};
  }
`;
