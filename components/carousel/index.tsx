import { useRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { GhostButton } from "../button/ghost";
import { ArrowLeftIcon } from "../icons/arrow-left";
import { ArrowRightIcon } from "../icons/arrow-right";

import { colorBg1, spacing4, spacing16, spacing64 } from "../style/variables";

const Outer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
  place-content: stretch;
  place-items: stretch;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  background-color: ${colorBg1};
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
  place-content: stretch;
  place-items: stretch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BaseButton = styled(GhostButton)`
  display: block;
  position: absolute;
  inset-block-start: calc(50% - ${spacing16});
`;

const BackButton = styled(BaseButton)`
  inset-inline-start: ${spacing4};
`;

const NextButton = styled(BaseButton)`
  inset-inline-end: ${spacing4};
`;

export function Carousel({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  const next = () =>
    ref?.current?.scrollBy?.({
      top: 0,
      left: 100,
      behavior: "smooth",
    });

  const prev = () =>
    ref?.current?.scrollBy?.({
      top: 0,
      left: -100,
      behavior: "smooth",
    });

  return (
    <Outer {...props}>
      <Inner ref={ref}>
        <BackButton onClick={prev}>
          <ArrowLeftIcon />
        </BackButton>
        {children}
        <NextButton onClick={next}>
          <ArrowRightIcon />
        </NextButton>
      </Inner>
    </Outer>
  );
}

export const Slide = styled.div`
  flex: 0 0 100%;
  padding-inline-end: ${spacing64};
  padding-inline-start: ${spacing64};
  scroll-snap-align: start;
  width: 100%;
`;
