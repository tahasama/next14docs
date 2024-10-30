import React from "react";

async function Setting() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return <div>Setting</div>;
}

export default Setting;
