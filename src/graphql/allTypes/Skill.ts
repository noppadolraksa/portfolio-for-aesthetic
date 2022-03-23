import { objectType } from "nexus";

export const Skill = objectType({
  name: "Skill",
  definition(t) {
    t.model.listening();
    t.model.reading();
    t.model.speaking();
    t.model.writing();
    t.model.skills();
    t.model.personalities();
    t.model.id();
    t.model.userId();
  },
});
