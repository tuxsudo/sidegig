import { mutationField, objectType } from "nexus";

import { Counter } from "../types/counter";

const DecrementCounterResponse = objectType({
  name: "DecrementCounterResponse",
  definition(t) {
    t.field("counter", { type: Counter });
  },
});

export const decrementCounter = mutationField("decrementCounter", {
  type: DecrementCounterResponse,

  async resolve(_root, _args, ctx) {
    const service = ctx.counterService();
    service.decrement();
    return {
      counter: service.toJSON(),
    };
  },
});
