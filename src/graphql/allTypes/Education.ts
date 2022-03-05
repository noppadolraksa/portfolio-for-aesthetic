import { objectType } from "nexus";

export const Education = objectType({
  name: "Education",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.userId();
    t.model.index();
    t.model.institution();
    t.model.degree();
    t.model.date();
    t.model.fieldOfStudy();
  },
});
