import React, { useState } from "react";
import incrementLike from "./actions";
import LikeButton from "./button";

const Analytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      <p>Analytics</p>
      <LikeButton initialLikes={0} />
    </div>
  );
};

export default Analytics;
