import { ApolloServer } from "apollo-server-micro";

import Cors from "micro-cors";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { PageConfig } from "next";
import { GraphQLSchema } from "graphql";
import { createContext } from "src/graphql/context";
import { schema } from "src/graphql/schema";

// const cors = Cors();
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  // debug: true,
  // introspection: true,
});
const startServer = apolloServer.start();

// export default cors(async function handler(
//   req: MicroRequest,
//   res: ServerResponse
// ) {
//   if (req.method === "OPTIONS") {
//     res.end();
//     return false;
//   }
//   await startServer;
//   await apolloServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
