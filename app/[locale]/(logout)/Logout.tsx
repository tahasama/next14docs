"use client";

import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { logout } from "./action";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { useAuth } from "../provider/AuthProvider";
import { LuLoader2 } from "react-icons/lu";

const Logout = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuth();

  const initialState = {
    message: "isLoggedIn",
  };
  const [state, formAction, ispending] = useActionState(logout, initialState);

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
        {!ispending ? (
          <p className="flex">Logout</p>
        ) : (
          <p className="flex">
            <span className="animate-spin mx-auto">
              <LuLoader2 size={20} />
            </span>
            <span>logging out ...</span>
          </p>
        )}
      </button>
    </form>
  );
};

export default Logout;
