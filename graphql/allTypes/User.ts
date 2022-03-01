import { objectType } from "nexus";

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
    // t.list.field("frontEndSkills", {
    //   type: FrontEndSkill,
    //   resolve(root, args, ctx) {},
    // });
  },
});

// frontEndSkills     FrontEndSkill?
// backEndSkills      BackEndSkill?
// infrastructures    Infrastructure?
// project           Projects?
