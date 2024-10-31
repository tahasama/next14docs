"use client";

import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { logout } from "./action";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { useAuth } from "../provider/AuthProvider";

const Logout = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuth();

  const initialState = {
    message: "isLoggedIn",
  };
  const [state, formAction] = useActionState(logout, initialState);

  useEffect(() => {
    state.message !== "isLoggedIn" &&
      (setIsLoggedIn(false),
      localStorage.setItem("isLoggedIn", "false"),
      redirect("login"));
    return () => {};
  }, [state.message]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="block w-full text-start px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 transition ease-in-out delay-50 rounded-md"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
