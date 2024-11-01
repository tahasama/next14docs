import React from "react";

const Analytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>Analytics</div>;
};

export default Analytics;
