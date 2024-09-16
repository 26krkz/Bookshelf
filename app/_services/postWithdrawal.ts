const deleteAccountFromDB = () => {
  console.log("");
};

const signOutSession = () => {
  console.log("");
};

export default async function postWithdrawal() {
  try {
    const deleteStatus = await deleteAccountFromDB();
    const res = await signOutSession();
  } catch (err) {
    console.error(err);
  }
}
