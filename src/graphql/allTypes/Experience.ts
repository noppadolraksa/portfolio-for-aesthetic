import { objectType } from "nexus";

export const Experience = objectType({
  name: "Experience",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.userId();
    t.model.index();
    t.model.name();
    t.model.period();
    t.model.type();
    t.model.location();
  },
});
