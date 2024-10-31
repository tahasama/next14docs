"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {    
    const response = await fetch("http://localhost:3000/api/login", {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const ccc = (await cookies()).delete("authToken");

      redirect("/login");
    } else {
      const { error } = await response.json();
      console.error("Error logout user");
      return { message: error };
    }
  };
