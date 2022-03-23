import { objectType } from "nexus";

export const Certification = objectType({
  name: "Certification",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.userId();
    t.model.index();
    t.model.name();
    t.model.desc();
    t.model.year();
  },
});
