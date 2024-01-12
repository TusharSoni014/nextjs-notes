import React from "react";

export default async function UserPosts({
  promise,
}: {
  promise: Promise<ResponsePostsType[]>;
}) {
  const posts = await promise;
  return (
    <div>
      {posts.map((post) => {
        return (
          <article key={post.createdAt}>
            <h1 className="font-bold text-xl">{post.title}</h1>
            <p>{post.desc}</p>
          </article>
        );
      })}
    </div>
  );
}
