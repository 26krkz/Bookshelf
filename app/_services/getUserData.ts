import { getServerSession } from "@/lib/auth";
import prisma from "../../prisma";

export default async function getUserData({ bookshelfId }: { bookshelfId?: string } = {}) {
  if (bookshelfId !== "") {
    return await prisma.user.findFirst({
      where: { bookshelf_id: bookshelfId },
    });
  } else {
    const session = await getServerSession();
    return await prisma.user.findFirst({
      where: { id: session?.user.id },
    });
  }
}
