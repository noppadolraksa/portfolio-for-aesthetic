import prisma from "lib/prisma";

export const resolvers = {
  Query: {
    User: async () => await prisma?.user.findFirst(),
  },
};
