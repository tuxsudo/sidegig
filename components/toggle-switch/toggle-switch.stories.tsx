import React, { useState } from "react";
import { ToggleSwitch } from ".";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
  argTypes: { onClick: { action: "clicked" } },
};

export function Demo() {
  const [on, setOn] = useState(false);
  return <ToggleSwitch active={on} onClick={() => setOn(!on)} />;
}

export const Static = (args: Record<string, any>) => <ToggleSwitch {...args} />;
