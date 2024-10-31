"use client";

import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { logout } from "./action";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { useAuth } from "../provider/AuthProvider";

const Logout = () => {
  const { setIsLoggedIn } = useAuth();
  const initialState = {
    message: "isLoggedIn",
  };
  const [state, formAction] = useActionState(logout, initialState);

  // useEffect(() => {
  //   state.message !== "isLoggedIn" && setIsLoggedIn(false);
  //   redirect("login");
  //   return () => {};
  // }, [state.message]);

  return (
    <>
      <form action={formAction}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Logout;
