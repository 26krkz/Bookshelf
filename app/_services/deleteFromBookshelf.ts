const deleteBookFromBookshelf = async ({ userId, bookId }: { userId: string; bookId: string }): Promise<{ message: string; status: number }> => {
  return fetch(`http://localhost:3000/api/books/${bookId}/bookshelf`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
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
export default function deleteFromBookshelf(openModal: () => void) {
  return async function deleteFromBookshelfAction(formData: FormData) {
    try {
      const bookId = formData.get("bookId");
      const userId = "003";
      if (typeof bookId !== "string") {
        throw new Error("bookIdが正しくありません。");
      }
      const res = await deleteBookFromBookshelf({ userId, bookId });
      if (res.message === "Delete Suceeded") {
        openModal();
      } else {
        throw new Error("削除に失敗しました");
      }
    } catch (error) {
      console.error("Error delete from Bookshelf data:", error);
    }
  };
}
