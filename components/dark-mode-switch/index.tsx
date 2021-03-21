import { HTMLAttributes } from "react";
import styled from "styled-components";

import { useGlobalState } from "../global-state";

import { spacing8 } from "../style/variables";
import { Light, Dark } from "../style/theme";
import { ToggleSwitch } from "../toggle-switch";
import { Label } from "../typography/label";

const StyledSwitch = styled(Label)`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

const Text = styled.span`
  margin-right: ${spacing8};
`;

export function DarkModeSwitch(props: HTMLAttributes<HTMLLabelElement>) {
  const globalState = useGlobalState();
  const isLight = globalState?.theme === "light";

  return (
    <StyledSwitch {...props}>
      <Text>{isLight ? "light" : "dark"}</Text>
      <ToggleSwitch
        active={!isLight}
        onClick={() => globalState?.setTheme(isLight ? "dark" : "light")}
      />
      {isLight ? <Light /> : <Dark />}
    </StyledSwitch>
  );
}
