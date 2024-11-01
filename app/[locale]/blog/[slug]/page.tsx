import React, { Suspense } from "react";
import Loading from "../loading";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function fetchPost(slug: string): Promise<string | null> {
  //   await new Promise<void>((resolve) => setTimeout(resolve, 2000));
  const validSlugs = ["dude", "hello", "example"];
  const foundSlugs = ["dude", "hi", "post"];

  //error.tsx
  if (!validSlugs.includes(slug)) {
    return Promise.reject(new Error("Error, post not found")); // Simulate an API failure
  }
  // not-found.tsx
  return foundSlugs.includes(slug) ? slug : null;
}

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const { slug } = params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Post: {post}</h1>
    </div>
  );
}
