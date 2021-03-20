import { queryField } from "nexus";

import { Counter } from "../types/counter";

export const getCounter = queryField("getCounter", {
  type: Counter,

  resolve(_root, _args, ctx) {
    const service = ctx.counterService();
    return service.toJSON();
  },
});
