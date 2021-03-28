import { Demo as IconDemo, Props } from "./lib/demo";

export default {
  title: "Icons",
  component: IconDemo,
  argTypes: { onClick: { action: "clicked" } },
};

export const Demo = (args: Props) => <IconDemo {...args} />;
