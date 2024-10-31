"use client";
import React from "react";
import Logout from "./(logout)/Logout";
import { useAuth } from "./provider/AuthProvider";

function Nav() {
  const { isLoggedIn } = useAuth();
  console.log("🚀 ~ Nav ~ isLoggedIn:", isLoggedIn);
  return (
    <nav className="text-center flex gap-10 capitalize">
      <a href="/">nextjs15 Home</a>
      <a href="/dashboard">dashboard</a>
      <a href="/blog">blog</a>
      {isLoggedIn && <Logout />}
    </nav>
  );
}

export default Nav;
