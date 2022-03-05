// /graphql/context.ts
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient | undefined;
};
export const createContext = (): Context => {
  return {
    prisma,
  };
};
