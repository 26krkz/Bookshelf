import { PrismaClient } from "@prisma/client";
import { user } from "./user";
import { favorite } from "./favorite";
import { bookshelf } from "./bookshelf";

export const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);
  await prisma.$transaction([...user(), ...favorite(), ...bookshelf()]);
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
