const postBookAddBookshelf = async ({ userId, bookId, prevState }: { userId: string; bookId: string; prevState: boolean }): Promise<{ addBookshelf: boolean }> => {
  return fetch(`http://localhost:3000/api/books/${bookId}/bookshelf`, {
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
export default function postAddBookshelf(openModal: () => void) {
  return async function postAddBookshelfAction(prevState: boolean, formData: FormData): Promise<boolean> {
    const session = true;
    if (!session) {
      openModal();
      console.error("ログインできていません");
      return prevState;
    }
    try {
      const bookId = formData.get("bookId");
      const userId = "003";
      if (typeof bookId !== "string") {
        throw new Error("bookIdが正しくありません。");
      }
      const status = await postBookAddBookshelf({ userId, bookId, prevState });
      return status.addBookshelf;
    } catch (error) {
      console.error("Error posting add bookshelf data:", error);
      return prevState;
    }
  };
}