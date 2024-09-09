import { BookInfo, GoogleBook } from "@/types";
import prisma from "../../prisma";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBook = async (id: string): Promise<GoogleBook> => {
  return fetch(`${BASE_URL}/${id}`)
    .then(async (res: Response) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(res.statusText);
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

export default async function getFavoriteList(): Promise<BookInfo[]> {
  // getSession
  // if (!userId) {
  //   return [];
  // }
  const userId = "003";
  try {
    const bookIds = await prisma.favorite
      .findMany({
        where: {
          userId: userId,
        },
        select: {
          bookId: true,
        },
      })
      .then((v) => v.map((obj) => obj.bookId));

    const books = await Promise.all(
      bookIds.map(async (id: string) => {
        return await getBook(id);
      })
    );
    if (books && books.length > 0) {
      const result = books.map((book: GoogleBook) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          imageUrl: book.volumeInfo.imageLinks?.thumbnail ?? `https://placehold.jp/150x210.png?text=${book.volumeInfo.title}`,
          description: book.volumeInfo.description,
        };
      });
      return result;
    } else {
      console.log("No books found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching book data:", error);
    return [];
  }
}
