"use client";

import { useActionState, useState } from "react";
import { publishPost, saveDraft } from "./formActions";

export default function FormPost() {
  const [draft, setDraft] = useState("");
  const [state, formAction, ispending] = useActionState(
    publishPost,
    saveDraft,
    ""
  );
  console.log("🚀 ~ FormPost ~ state:", state.message);
  return (
    <>
      <form
        action={formAction}
        className="space-y-6 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow"
      >
        <textarea
          // type="text"
          name="username"
          placeholder="Username"
          onChange={async (e) => {
            const ccc = await saveDraft(e.target.value);
            setDraft(ccc.message);
          }}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          publish
        </button>
      </form>
      <p>{state.message}</p>
      <p>{draft}</p>
    </>
  );
}
