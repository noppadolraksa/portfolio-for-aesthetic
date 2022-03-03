import { Project } from "./Project";
import { Education } from "./Education";
import { list, nonNull, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.int("index");
    t.string("name");
    t.string("tagline");
    t.string("email");
    t.string("github");
    t.string("website");
    t.string("phone");
    t.string("strength");
    t.string("born");
    t.string("objective");
    t.string("englishSkill");
    t.list.string("frontEndSkills");
    t.list.string("backEndSkills");
    t.list.string("infrastructures");
    t.list.field("project", {
      type: Project,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.project
          .findUnique({ where: { id: parent.id } })
          .project();
      },
    });
    t.list.field("education", {
      type: Education,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.education
          .findUnique({ where: { id: parent.id } })
          .education();
      },
    });
  },
});
