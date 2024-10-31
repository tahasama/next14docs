"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogin = async (prevState: any,formData: FormData) => {
  
    const newUser: any = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
      credentials: "include",
    });
    // revalidatePath("/blog");

    if (!response.ok) {
      const {error} = await response.json();
      console.error("Error login user");
      return {message:error};
    } else {
      const ccc = (await cookies()).set("authToken", "Success");
      redirect("/blog");
    }
  };