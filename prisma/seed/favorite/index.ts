import { prisma } from "../index";
import fixture from "./fixture.json";
import type { PrismaPromise, Favorite } from "@prisma/client";

export const favorite = () => {
  const res: PrismaPromise<Favorite>[] = [];
  fixture.forEach((data) => {
    const row = prisma.favorite.create({ data });
    res.push(row);
  });
  console.log(res);
  return res;
};
