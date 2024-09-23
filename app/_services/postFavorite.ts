import type { Session } from "next-auth";

const postBookFavorite = async ({ userId, bookId, prevState }: { userId: string; bookId: string; prevState: boolean }): Promise<{ favorite: boolean }> => {
  return fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/books/${bookId}/favorite`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, prevState }),
  })
    .then(async (res: Response) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message, data.status);
      }
      return data;
    })
    .catch((err: unknown) => {
      if (err instanceof Error) {
        console.warn(err.message);
      }
      throw err;
    });
};

type Props = {
  openModal: () => void;
  data: Session | null;
};

export default function postFavorite({ openModal, data }: Props) {
  return async function postFavoriteAction(prevState: boolean, formData: FormData): Promise<boolean> {
    if (!data) {
      openModal();
      console.error("ログインできていません");
      return prevState;
    }
    try {
      const bookId = formData.get("bookId");
      const userId = data.user.id;
      if (typeof bookId !== "string") {
        throw new Error("bookIdが正しくありません。");
      }
      const status = await postBookFavorite({ userId, bookId, prevState });
      return status.favorite;
    } catch (error) {
      console.error("Error posting favorite data:", error);
      return prevState;
    }
  };
}
