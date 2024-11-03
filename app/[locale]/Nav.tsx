// "use client";
import React from "react";
import Logout from "./(logout)/Logout";
import { CiUser } from "react-icons/ci";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Translate from "./Translate";

async function Nav({ locale }: any) {
  return (
    <nav className="text-center flex gap-10  w-3/7 capitalize text-lg text-gray-400 ">
      <Link
        href="/"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        nextjs15 Home
      </Link>
      <Link
        href="/dashboard"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        dashboard
      </Link>
      <Link
        href="/blog"
        className="hover:text-gray-700 transition ease-in-out delay-50"
      >
        blog
      </Link>
      <Translate locale={locale} />
      <div className="grid place-items-center cursor-pointer hover:text-gray-700 transition ease-in-out delay-50">
        <Dropdown />
      </div>
    </nav>
  );
}

export default Nav;
