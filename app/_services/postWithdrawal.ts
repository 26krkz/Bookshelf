"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "../../prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "@/lib/auth";
import { cookies } from "next/headers";

export default async function postWithdrawal() {
  try {
    const session = await getServerSession();
    const cookieStore = cookies();
    if (!session) throw new Error("sessionの取得に失敗しました。");

    await prisma.favorite.deleteMany({
      where: { userId: session.user.id },
    });
    await prisma.bookshelf.deleteMany({
      where: { userId: session.user.id },
    });
    await prisma.account.deleteMany({
      where: { userId: session.user.id },
    });
    await prisma.user.delete({
      where: { email: session.user.email },
    });

    cookieStore.set("next-auth.session-token", "", {
      maxAge: 0,
      path: "/",
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        console.error("ユーザーの削除に失敗しました");
      }
    }
    console.error(err);
  }
  revalidatePath("/favorite");
  revalidatePath("/bookshelf");
  redirect("/");
}
