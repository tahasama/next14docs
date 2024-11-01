import React, { Suspense, useState } from "react";
import Loading from "./loading";
import Analytics from "./analytics/page";
import Setting from "./settings/page";

async function page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Analytics />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Setting />
      </Suspense>
    </div>
  );
}

export default page;
