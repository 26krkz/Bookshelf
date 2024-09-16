import prisma from "../../../prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { Session } from "next-auth";

type ReqestBody = {
  session: Session;
};
export async function DELETE(req: NextRequest) {
  const body: ReqestBody = await req.json();
  const { session } = body;

  try {
    await prisma.favorite.deleteMany({
      where: { userId: session.user.id },
    });
    await prisma.bookshelf.deleteMany({
      where: { userId: session.user.id },
    });
    // user tableからの削除がうまくいっていないかも。userだけの削除でいいのか？
    await prisma.user.delete({
      where: { email: session.user.email },
    });
    revalidatePath("/favorite");
    revalidatePath("/bookshelf");
    redirect("/");
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return Response.json({ message: "Already favorite" }, { status: 409 });
      }
    }
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
