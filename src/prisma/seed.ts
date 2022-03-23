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
    image,
    tagline,
    email,
    github,
    location,
    born,
    objective,
    phone,
    strength,
    website,
  } = data.user;

  const { reading, writing, listening, speaking, skills, personalities } =
    data.skill;

  await prisma.user.create({
    data: {
      name: name,
      tagline: tagline,
      email: email,
      github: github,
      image: image,
      website: website,
      phone: phone,
      strength: strength,
      born: born,
      location: location,
      objective: objective,
      education: { createMany: { data: data.education } },
      experience: { createMany: { data: data.experience } },
      certification: { createMany: { data: data.certification } },
      skill: {
        create: {
          listening: listening,
          speaking: speaking,
          reading: reading,
          writing: writing,
          skills: skills,
          personalities: personalities,
        },
      },
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
