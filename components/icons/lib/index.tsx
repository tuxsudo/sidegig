import styled, { StyledComponent } from "styled-components";
import { spacing24 } from "../../style/variables";

export interface IconProps {
  color?: string;
  size?: string;
}

export type WrappedSvg = StyledComponent<"svg", any, IconProps, never>;

export const wrapSvg = (Comp: any): WrappedSvg =>
  styled(Comp)<IconProps>`
    display: block;
    height: ${(props) => props.size || spacing24};
    width: ${(props) => props.size || spacing24};
  ` as WrappedSvg;
