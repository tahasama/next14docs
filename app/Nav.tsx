"use client";
import React from "react";
import Logout from "./(logout)/Logout";
import { CiUser } from "react-icons/ci";
import Dropdown from "./Dropdown";

function Nav() {
  return (
    <nav className="text-center flex gap-10  w-3/7 capitalize text-lg text-gray-400 ">
      <a
        href="/"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        nextjs15 Home
      </a>
      <a
        href="/dashboard"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        dashboard
      </a>
      <a
        href="/blog"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        blog
      </a>
      <div className="grid place-items-center cursor-pointer hover:text-gray-700 transition ease-in-out delay-50">
        <Dropdown />
      </div>
    </nav>
  );
}

export default Nav;
