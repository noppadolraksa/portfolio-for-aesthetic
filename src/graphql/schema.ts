import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as types from "./allTypes";
import { nexusPrisma } from "nexus-plugin-prisma";

export const schema = makeSchema({
  types,
  plugins: [connectionPlugin(), nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "src/graphql", "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "src/graphql", "context.ts"),
    export: "Context",
  },
});
