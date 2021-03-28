import { Lines, Line } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Skeleton Loader/Lines",
  component: Lines,
  argTypes: { onClick: { action: "clicked" } },
};

type Args = Record<string, any>;

export function Demo(props: Args) {
  return (
    <Lines {...props}>
      <Line />
      <Line />
      <Line />
      <Line />
    </Lines>
  );
}

export function DemoLightMode(props: Args) {
  return (
    <>
      <LightMode />
      <Lines {...props}>
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
    </>
  );
}
