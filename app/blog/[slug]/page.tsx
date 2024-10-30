import React, { Suspense, useState } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

async function page({ params }: PageProps) {
  const { slug } = params;

  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}

export default page;
