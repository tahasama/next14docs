"use client";

import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Logout from "./(logout)/Logout";
import { useAuth } from "./provider/AuthProvider";
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropdown = () => setIsOpen(false);

  const { isLoggedIn } = useAuth();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center gap-1"
          aria-expanded={isOpen}
        >
          <CiUser size={24} />

          <IoIosArrowDown size={16} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-slate-800 ">
          {!isLoggedIn ? (
            <Link
              href="/login"
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 transition ease-in-out delay-50 rounded-md"
            >
              Login
            </Link>
          ) : (
            <Logout />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
