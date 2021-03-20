import { apolloServer } from "../../../server/graphql/apollo-server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
});
