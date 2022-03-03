import { objectType } from "nexus";

export const Education = objectType({
  name: "Education",
  definition(t) {
    t.id("id");
    t.int("index");
    t.field("user", { type: "User" });
    t.string("userId");
    t.string("institution");
    t.string("degree");
    t.nullable.string("date");
    t.string("fieldOfStudy");
  },
});
