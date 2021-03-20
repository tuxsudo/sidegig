import { objectType } from "nexus";

export const Counter = objectType({
  name: "Counter",
  definition(t) {
    t.int("count");
    t.dateTime("lastModified");
  },
});
