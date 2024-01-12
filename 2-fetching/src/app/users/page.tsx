import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
};

async function fetchUsers() {
  const response = await fetch(
    "https://6592c197bb12970719900132.mockapi.io/api/users"
  );
  if (!response) {
    throw new Error("error fetching users");
  }
  return await response.json();
}

export default async function UsersPage() {
  const data: ResponseUsersType[] = await fetchUsers();
  return (
    <div className="p-3 border-2">
      <Link className="border-2 p-3" href="/">
        BACK TO HOME
      </Link>
      {data.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className="my-3">{user.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
