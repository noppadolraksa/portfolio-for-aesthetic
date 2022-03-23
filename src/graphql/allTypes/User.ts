import { Education } from "./Education";
import { objectType } from "nexus";
import { Context } from "nexus-plugin-prisma/dist/utils";

import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { Certification } from "./Certification";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.index();
    t.model.name();
    t.model.image();
    t.model.location();
    t.model.tagline();
    t.model.email();
    t.model.github();
    t.model.website();
    t.model.phone();
    t.model.strength();
    t.model.born();
    t.model.objective();

    t.nonNull.list.field("experience", {
      type: Experience,
      async resolve(root, _args, ctx) {
        return ctx.prisma.experience.findMany({ where: { userId: root.id } });
      },
    });
    t.nonNull.list.field("education", {
      type: Education,
      async resolve(root, _args, ctx) {
        return ctx.prisma.education.findMany({ where: { userId: root.id } });
      },
    });
    t.nonNull.list.field("certification", {
      type: Certification,
      async resolve(root, _args, ctx) {
        return ctx.prisma.certification.findMany({
          where: { userId: root.id },
        });
      },
    });
    t.nullable.field("skill", {
      type: Skill,
      async resolve(root, _args, ctx) {
        return ctx.prisma.skill.findUnique({ where: { userId: root.id } });
      },
    });
  },
});
