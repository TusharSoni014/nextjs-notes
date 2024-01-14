import Image from "next/image";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface UserParamsType {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId },
}: UserParamsType): Promise<Metadata> {
  const response: Promise<ResponseUsersType> = getUserData(userId);
  const responseJson = await response;

  if (!responseJson) {
    return {
      title: "User not found!",
    };
  }
  return {
    title: responseJson.name,
    description: responseJson.id,
  };
}

async function getUserData(userId: string) {
  const response = await fetch(
    `https://6592c197bb12970719900132.mockapi.io/api/users/${userId}`
  );
  if (!response.ok) {
    return undefined;
  }
  return await response.json();
}
//
//{cache:"force-store"} - default -> caches the dynamic requests as well, but if the data is being constantly updates, its not the best option

//{cache:"no-store"} -> always dynamic data

//{ next: { revalidate: 60 } } -> ISR (revalidating after every 60 seconds or whatever number given)

async function getUserPosts(userId: string) {
  const response = await fetch(
    `https://6592c197bb12970719900132.mockapi.io/api/users/${userId}/posts`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error("Error fetching user data");
  }
  return await response.json();
}

export default async function UserPage({ params: { userId } }: UserParamsType) {
  const userData: ResponseUsersType = await getUserData(userId);
  const postsPromise: Promise<ResponsePostsType[]> = getUserPosts(userId);

  if (!userData) notFound();

  return (
    <div>
      <p>{userData.name}</p>
      <Image
        src={userData.avatar}
        alt={userData.name}
        width={100}
        height={100}
      />
      <p>{userData.id}</p>
      <h1>{userData.name} Posts</h1>
      <Suspense fallback={<>User Posts Loading....</>}>
        <UserPosts promise={postsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetch(
    "https://6592c197bb12970719900132.mockapi.io/api/users"
  );
  if (!response.ok) {
    return undefined;
  }
  const users: ResponseUsersType[] = await response.json();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
