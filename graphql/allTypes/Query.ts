import { queryType } from "nexus";
import { data } from "../data";
import { User } from "./index";

//query
export const Query = queryType({
  definition(t) {
    t.field("User", {
      type: User,
      resolve: () => data.user,
    });
  },
});

//mutation
