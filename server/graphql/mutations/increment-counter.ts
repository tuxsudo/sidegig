import { mutationField, objectType } from "nexus";

import { Counter } from "../types/counter";

const IncrementCounterResponse = objectType({
  name: "IncrementCounterResponse",
  definition(t) {
    t.field("counter", { type: Counter });
  },
});

export const incrementCounter = mutationField("incrementCounter", {
  type: IncrementCounterResponse,

  async resolve(_root, _args, ctx) {
    const service = ctx.counterService();
    service.increment();
    return {
      counter: service.toJSON(),
    };
  },
});
