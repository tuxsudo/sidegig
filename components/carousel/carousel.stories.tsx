import { Carousel, Slide as BaseSlide } from ".";
import styled from "styled-components";

import { Light as LightMode } from "../style/theme";
import { Hero } from "../typography/heading";

export default {
  title: "Carousel",
  argTypes: { onClick: { action: "clicked" } },
};

const Slide = styled(BaseSlide)`
  display: flex;
  place-items: center;
  place-content: center;
`;

export function Demo(args: Record<string, any>) {
  return (
    <Carousel {...args}>
      {Array.from({ length: 10 }, (_, i) => (
        <Slide>
          <Hero>{i + 1}</Hero>
        </Slide>
      ))}
    </Carousel>
  );
}

export function DemoLightMode(args: Record<string, any>) {
  return (
    <>
      <LightMode />
      <Carousel {...args}>
        {Array.from({ length: 10 }, (_, i) => (
          <Slide>
            <Hero>{i + 1}</Hero>
          </Slide>
        ))}
      </Carousel>
    </>
  );
}
