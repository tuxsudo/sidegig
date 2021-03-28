import { FormEvent } from "react";
import styled from "styled-components";
import * as dateTime from "../../lib/text-utils/date-time";

import { useCounterQuery } from "./data";
import { MinusButton } from "./minus-button";
import { PlusButton } from "./plus-button";

import { spacing32, spacing64 } from "../style/variables";
import { Card } from "../card";
import { Small as StyledSmall } from "../typography/small";
import { Stack } from "../stack";
import { Hero } from "../typography/heading";

const Controls = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: ${spacing64} 1fr ${spacing64};
`;

const Small = styled(StyledSmall)`
  display: block;
  text-align: end;
`;

export function CounterForm(props: Record<string, any>) {
  const { counter, loading, error } = useCounterQuery();

  if (loading) {
    return <i>Loading...</i>;
  }

  if (error) {
    return <i>Error...</i>;
  }

  if (!counter) {
    return <i>Counter not found</i>;
  }

  return (
    <Card
      {...props}
      as="form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <Stack gapSize={spacing32}>
        <Controls>
          <MinusButton />
          <Hero style={{ textAlign: "center" }}>{counter.count}</Hero>
          <PlusButton />
        </Controls>

        <Small>updated at {dateTime.format(counter.lastModified)}</Small>
      </Stack>
    </Card>
  );
}
