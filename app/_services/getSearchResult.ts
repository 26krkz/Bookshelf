"use server";
import { BookInfo, GoogleBook, GoogleBooksInfo } from "@/types";

// Google Books APIのキーを指定する（適宜、自分のAPIキーを設定してください）
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBooks = async (query: string): Promise<GoogleBooksInfo> => {
  return fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`, { cache: "no-store" })
    .then(async (res: Response) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return data.items;
    })
    .catch((err: unknown) => {
      if (err instanceof Error) {
        console.warn(err.message);
      }
      throw err;
    });
};

export default async function getSearchResult(_: BookInfo[], queryData: FormData): Promise<BookInfo[]> {
  try {
    const query = queryData.get("inputValue");
    if (typeof query !== "string") {
      throw new Error("queryが正しくありません");
    }
    const books = await getBooks(query);

    if (books && books.length > 0) {
      const result = books.map((book: GoogleBook) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          imageUrl: book.volumeInfo.imageLinks?.thumbnail ?? "https://placehold.jp/150x210.png",
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
