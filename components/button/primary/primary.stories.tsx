import { PrimaryButton } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Buttons/Primary",
  component: PrimaryButton,
  argTypes: { onClick: { action: "clicked" } },
};

export function Demo(args: Record<string, any>) {
  return <PrimaryButton {...args}>Click me</PrimaryButton>;
}

export function DemoLightMode(args: Record<string, any>) {
  return (
    <>
      <LightMode />
      <PrimaryButton {...args}> Click me</PrimaryButton>
    </>
  );
}
