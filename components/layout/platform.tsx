import { HTMLAttributes } from "react";
import styled from "styled-components";

import { Menu } from "./menu";
import { spacing4 } from "../style/variables";

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
`;

export function Platform({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <StyledLayout {...props}>
      <Menu
        style={{ position: "absolute", bottom: spacing4, right: spacing4 }}
      />
      {children}
    </StyledLayout>
  );
}
