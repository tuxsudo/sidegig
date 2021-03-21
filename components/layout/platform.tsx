import { HTMLAttributes } from "react";
import styled from "styled-components";
import { spacing8 } from "../style/variables";

import { Menu } from "./menu";

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
