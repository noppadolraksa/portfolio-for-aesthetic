import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.int("index");
    t.field("user", { type: "User" });
    t.string("userId");
    t.string("title");
    t.string("description");
    t.string("born");
    t.list.string("technologies");
    t.list.string("techniques");
    t.string("sourceCode");
    t.nullable.string("link1");
    t.nullable.string("link2");
    t.nullable.string("link3");
  },
});
