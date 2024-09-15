const deleteBookFavorite = async ({ bookId }: { bookId: string }): Promise<{ message: string; status: number }> => {
  return fetch(`http://localhost:3000/api/books/${bookId}/favorite`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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
export default function deleteFavorite(openModal: () => void) {
  return async function deleteFavoriteAction(formData: FormData) {
    try {
      const bookId = formData.get("bookId");
      if (typeof bookId !== "string") {
        throw new Error("bookIdが正しくありません。");
      }
      const res = await deleteBookFavorite({ bookId });
      if (res.message === "Delete Suceeded") {
        openModal();
      } else {
        throw new Error("削除に失敗しました");
      }
    } catch (error) {
      console.error("Error delete favorite data:", error);
    }
  };
}
