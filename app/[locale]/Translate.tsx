"use client";
import React, { ChangeEvent } from "react";
import { Params } from "./layout";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

const Translate = ({ locale }: Params) => {
  console.log("🚀 ~ Translate ~ locale:", locale);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    console.log("🚀 ~ handleChange ~ newLocale:", newLocale);
    // const path = pathname.slice(1, 3);
    const path = pathname.split("/").slice(2).join("/");
    router.push(`${newLocale}/${path}`);
  };

  return (
    <select value={locale} onChange={handleChange} className="bg-transparent ">
      <option value="en" className="bg-slate-700 hover:bg-slate-800">
        English
      </option>
      <option value="es" className="bg-slate-700 hover:bg-slate-800">
        Español
      </option>
    </select>
  );
};

export default Translate;
