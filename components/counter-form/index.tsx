import { FormEvent } from "react";
import styled from "styled-components";
import * as dateTime from "../../lib/text-utils/date-time";

import { useCounterQuery } from "./data";
import { MinusButton } from "./minus-button";
import { PlusButton } from "./plus-button";

import { color2, fontSize12, fontSize22, spacing32 } from "../style/variables";
import { Card } from "../card";
import { Stack } from "../stack";

const Controls = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: ${spacing32} 1fr ${spacing32};
`;

const Indicator = styled.strong`
  font-size: ${fontSize22};
  text-align: center;
`;

const Small = styled.small`
  color: ${color2};
  font-size: ${fontSize12};
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
          <Indicator>{counter.count}</Indicator>
          <PlusButton />
        </Controls>

        <Small>updated at {dateTime.format(counter.lastModified)}</Small>
      </Stack>
    </Card>
  );
}
