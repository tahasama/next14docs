import React, { useState } from "react";
import incrementLike from "./actions";
import LikeButton from "./button";
import FormPost from "./form";

const Analytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      <p>Analytics</p>
      <LikeButton initialLikes={0} />
      <FormPost />
    </div>
  );
};

export default Analytics;
