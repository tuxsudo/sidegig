import { HTMLAttributes } from "react";
import styled from "styled-components";
import { spacing8 } from "../style/variables";

import { Menu } from "./menu";

import { LoginButton } from "../session/login-button";

const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100vw;
`;

export function Platform({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <StyledLayout {...props}>
      <LoginButton
        style={{
          position: "absolute",
          right: spacing8,
          top: spacing8,
        }}
      />
      <Menu
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: spacing8,
        }}
      />
      {children}
    </StyledLayout>
  );
}
