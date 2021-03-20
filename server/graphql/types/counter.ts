import { objectType } from "nexus";

export const Counter = objectType({
  name: "Counter",
  definition(t) {
    t.id("id", {
      resolve() {
        return "42194d17-02df-435d-8655-f260cc69fea7";
      },
    });
    t.int("count");
    t.dateTime("lastModified");
  },
});
