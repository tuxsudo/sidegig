import { ApolloServer } from "apollo-server-micro";
import { HttpContext } from "../context";
import { schema } from "./schema";

export const apolloServer = new ApolloServer({
  schema,
  context({ req, res }) {
    return HttpContext.init(req, res);
  },
});
