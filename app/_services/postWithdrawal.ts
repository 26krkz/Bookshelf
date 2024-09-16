import { Session } from "next-auth";

const getCsrfToken = async (): Promise<{ csrfToken: string }> => {
  return fetch("http://localhost:3000/api/auth/csrf", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
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

const getSession = async () => {
  return fetch("http://localhost:3000/api/auth/session", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
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

const signOutSession = async ({ csrfToken }: { csrfToken: string }) => {
  return fetch("http://localhost:3000/api/auth/signout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      csrfToken: csrfToken,
    }),
  });
};

const deleteAccountFromDB = async ({ session }: { session: Session }) => {
  return fetch("http://localhost:3000/api/withdrawal", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session }),
  });
};

export default async function postWithdrawal() {
  try {
    const { csrfToken } = await getCsrfToken();
    const session: Session = await getSession();
    await signOutSession({ csrfToken });
    await deleteAccountFromDB({ session });
  } catch (err) {
    console.error(err);
  }
}
