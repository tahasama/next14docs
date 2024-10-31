"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async (statusx:any) => {    
    const response = await fetch("http://localhost:3000/api/login", {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
     (await cookies()).delete(  "authToken");
    //   return { message: 'isLoggedOut' }
      redirect('/login')

    } else {
      const { error } = await response.json();
      console.error("Error logout user");

      return { message: error };
    }
  };
