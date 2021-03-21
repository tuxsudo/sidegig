import { HTMLAttributes } from "react";

import { Platform } from "./platform";
import { Frame } from "./frame";

export function Main({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Platform {...props}>
      <Frame>{children}</Frame>
    </Platform>
  );
}
