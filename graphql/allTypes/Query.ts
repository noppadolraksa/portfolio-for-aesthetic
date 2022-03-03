import { User } from "graphql/allTypes";
import { extendType, nonNull, queryType, stringArg } from "nexus";

//query
export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("User", {
      type: User,
      async resolve(_parent, _args, ctx) {
        await ctx.prisma.user.findMany();
      },
    });
  },
});

//mutation
