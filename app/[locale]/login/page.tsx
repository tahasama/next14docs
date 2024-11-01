"use client";

import { redirect, useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthProvider";
import { handleLogin } from "./actions";
import { useActionState, useEffect } from "react";
import { LuLoader2 } from "react-icons/lu";

export default function LoginPage() {
  const { setIsLoggedIn } = useAuth();

  const initialState = {
    message: "",
  };
  const [state, formAction, ispending] = useActionState(
    handleLogin,
    initialState
  );

  useEffect(() => {
    state.message === "isLoggedIn" &&
      (setIsLoggedIn(true),
      localStorage.setItem("isLoggedIn", "true"),
      redirect("/blog"));

    return () => {};
  }, [state.message]);

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

        {!ispending ? (
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Login
          </button>
        ) : (
          <p className="flex justify-center">
            <span className="animate-spin mx-auto">
              <LuLoader2 size={20} />
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
