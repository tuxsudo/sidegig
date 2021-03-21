import { HTMLAttributes } from "react";
import styled from "styled-components";

import { ToggleSwitch } from "../toggle-switch";
import { Light, Dark } from "../style/theme";
import { color3, fontSize12, spacing8 } from "../style/variables";
import { useGlobalState } from "../global-state";

const StyledSwitch = styled.div`
  align-items: center;
  display: flex;
`;

const Small = styled.small`
  color: ${color3};
  font-size: ${fontSize12};
  font-style: italic;
  margin-right: ${spacing8};
`;

export function DarkModeSwitch(props: HTMLAttributes<HTMLDivElement>) {
  const globalState = useGlobalState();
  const isLight = globalState?.theme === "light";

  return (
    <StyledSwitch {...props}>
      <Small>dark mode</Small>
      <ToggleSwitch
        active={!isLight}
        onClick={() => globalState?.setTheme(isLight ? "dark" : "light")}
      />
      {isLight ? <Light /> : <Dark />}
    </StyledSwitch>
  );
}
