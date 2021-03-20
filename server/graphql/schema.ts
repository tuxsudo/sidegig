import { makeSchema } from "nexus";
import { join } from "path";

import * as Query from "./queries";
import * as Mutation from "./mutations";
import * as scalars from "./scalars";

const dirName = join(process.cwd(), "server", "graphql");

export const schema = makeSchema({
  types: [Query, Mutation, ...Object.values(scalars)],
  outputs: {
    typegen: join(dirName, "nexus-typegen.ts"),
    schema: join(dirName, "schema.graphql"),
  },
  contextType: {
    module: join(dirName, "../context/index.ts"),
    export: "HttpContext",
  },
});
