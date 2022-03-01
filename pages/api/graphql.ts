import { resolvers } from "graphql/resolvers";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "graphql/schema";
import Cors from "micro-cors";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { PageConfig } from "next";
import { GraphQLSchema } from "graphql";
import { createContext } from "graphql/context";

const cors = Cors();
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  debug: true,
  introspection: true,
});
const startServer = apolloServer.start();

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
