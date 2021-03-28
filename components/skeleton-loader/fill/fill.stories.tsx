import styled from "styled-components";
import { Fill } from ".";

import { Light as LightMode } from "../../style/theme";
import { spacing16 } from "../../style/variables";

export default {
  title: "Skeleton Loader/Elements/Fill",
  component: Fill,
  argTypes: { onClick: { action: "clicked" } },
};

const Container = styled.div`
  display: grid;
  place-items: stretch;
  place-content: stretch;
  min-height: ${spacing16};
`;

export function Demo(props: Record<string, any>) {
  return (
    <Container>
      <Fill {...props} />
    </Container>
  );
}

export function DemoLightMode(props: Record<string, any>) {
  return (
    <>
      <LightMode />
      <Container>
        <Fill {...props} />
      </Container>
    </>
  );
}
