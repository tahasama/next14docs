"use client";

import { redirect } from "next/navigation";
import { useActionState } from "react";
import { logout } from "./action";

const Logout = () => {
  const initialState = {
    message: "",
  };
  const [state, formAction] = useActionState(logout, initialState);
  return (
    <form action={formAction}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
