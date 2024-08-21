import { prisma } from "../index";
import fixture from "./fixture.json";
import type { PrismaPromise, Bookshelf } from "@prisma/client";

export const bookshelf = () => {
  const res: PrismaPromise<Bookshelf>[] = [];
  fixture.forEach((data) => {
    const row = prisma.bookshelf.create({ data });
    res.push(row);
  });
  console.log(res);
  return res;
};
