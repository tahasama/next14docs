"use client";

import { handleLogin } from "./actions";
import { useActionState } from "react";

export default function LoginPage() {
  const initialState = {
    message: "",
  };
  const [state, formAction] = useActionState(handleLogin, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        action={formAction}
        className="space-y-6 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {state.message && (
          <p className="text-red-600 font-semibold text-sm bg-red-500/15 p-2 rounded-md shadow-sm capitalize">
            {state.message}
          </p>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
