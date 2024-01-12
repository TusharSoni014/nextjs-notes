import Image from "next/image";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

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
    throw new Error("Error fetching user data");
  }
  return await response.json();
}

async function getUserPosts(userId: string) {
  const response = await fetch(
    `https://6592c197bb12970719900132.mockapi.io/api/users/${userId}/posts`
  );
  if (!response.ok) {
    throw new Error("Error fetching user data");
  }
  return await response.json();
}

export default async function UserPage({ params: { userId } }: UserParamsType) {
  const userData: ResponseUsersType = await getUserData(userId);
  const postsPromise: Promise<ResponsePostsType[]> = getUserPosts(userId);
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
      <h1>{userData.name}'s Posts</h1>
      <Suspense fallback={<>User's Posts Loading....</>}>
        <UserPosts promise={postsPromise} />
      </Suspense>
    </div>
  );
}
