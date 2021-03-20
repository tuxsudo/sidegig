import * as dateTime from "../../lib/text-utils/date-time";

import { useCounterQuery } from "./data";
import { MinusButton } from "./minus-button";
import { PlusButton } from "./plus-button";

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
    <form {...props} onSubmit={(e) => e.preventDefault()}>
      <MinusButton />
      <strong>{counter.count}</strong>
      <PlusButton />
      <div>
        <small>updated at {dateTime.format(counter.lastModified)}</small>
      </div>
    </form>
  );
}
