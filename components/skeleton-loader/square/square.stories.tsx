import { Square } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Skeleton Loader/Elements/Square",
  component: Square,
  argTypes: { onClick: { action: "clicked" } },
};

export function Demo(props: Record<string, any>) {
  return <Square {...props} />;
}

export function DemoLightMode(props: Record<string, any>) {
  return (
    <>
      <LightMode />
      <Square {...props} />
    </>
  );
}
