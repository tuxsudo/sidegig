import { GhostButton } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Buttons/Ghost",
  component: GhostButton,
  argTypes: { onClick: { action: "clicked" } },
};

export function Demo(args: Record<string, any>) {
  return <GhostButton {...args}>Click me</GhostButton>;
}

export function DemoLightMode(args: Record<string, any>) {
  return (
    <>
      <LightMode />
      <GhostButton {...args}> Click me</GhostButton>
    </>
  );
}
