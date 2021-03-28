import { Circle } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Skeleton Loader/Elements/Circle",
  component: Circle,
  argTypes: { onClick: { action: "clicked" } },
};

export function Demo(args: Record<string, any>) {
  return <Circle {...args} />;
}

export function DemoLightMode(args: Record<string, any>) {
  return (
    <>
      <LightMode />
      <Circle {...args}> Click me</Circle>
    </>
  );
}
