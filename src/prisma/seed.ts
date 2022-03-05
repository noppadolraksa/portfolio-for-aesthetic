import { data } from "../graphql/data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: `testemail@gmail.com`,
  //     role: 'ADMIN',
  //   },
  // })

  const {
    name,
    tagline,
    email,
    github,
    backEndSkills,
    born,
    englishSkill,
    frontEndSkills,
    infrastructures,
    objective,
    phone,
    strength,
    website,
  } = data.user;

  await prisma.user.create({
    data: {
      name: name,
      tagline: tagline,
      email: email,
      github: github,
      website: website,
      phone: phone,
      strength: strength,
      born: born,
      objective: objective,
      englishSkill: englishSkill,
      frontEndSkills: frontEndSkills,
      backEndSkills: backEndSkills,
      infrastructures: infrastructures,
      education: { createMany: { data: data.education } },
      project: { createMany: { data: data.project } },
    },
  });

  // await prisma.link.createMany({
  //   data: data,
  // })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });