import { Education } from "./Education";
import { objectType } from "nexus";
import { Context } from "nexus-plugin-prisma/dist/utils";
import { Project } from "./Project";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.index();
    t.model.name();
    t.model.tagline();
    t.model.email();
    t.model.github();
    t.model.website();
    t.model.phone();
    t.model.strength();
    t.model.born();
    t.model.objective();
    t.model.englishSkill();
    t.model.backEndSkills();
    t.model.frontEndSkills();
    t.model.infrastructures();
    t.nonNull.list.field("project", {
      type: Project,
      async resolve(root, _args, ctx) {
        return ctx.prisma.project.findMany({ where: { userId: root.id } });
      },
    });
    t.nonNull.list.field("education", {
      type: Education,
      async resolve(root, _args, ctx) {
        return ctx.prisma.education.findMany({ where: { userId: root.id } });
      },
    });
  },
});
