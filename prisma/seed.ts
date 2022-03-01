import { data } from "./../graphql/data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: `testemail@gmail.com`,
  //     role: 'ADMIN',
  //   },
  // })
  await prisma.user.create({
    data: data.user,
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
