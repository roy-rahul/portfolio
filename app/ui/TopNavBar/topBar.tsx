"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/app/lib/utils";

export default function TopNavBar() {

  return (
    <div className="fixed w-full border border-t-gray-300 border-b-gray-300 border-r-white border-l-white display flex flex-row gap-8 p-2 shadow-md bg-white">
      <Link
        href="/"
        className="flex flex-row gap-2 items-center justify-center"
      >
        <Image
          src="/RR-Logo.svg"
          width={48}
          height={48}
          className="hidden md:block"
          alt="Rahul Roy Logo"
        />
      </Link>
      <div className="flex flex-row w-full gap-8 items-center justify-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-brand-600 hover:bg-brand-300 hover:text-white cursor-pointer h-full rounded-4xl py-1 px-4"
        >
          <span className="">Home</span>
        </button>
        <button
          className="text-brand-600 hover:bg-brand-300 hover:text-white cursor-pointer h-full rounded-4xl py-1 px-4"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className="text-brand-600 hover:bg-brand-300 hover:text-white cursor-pointer h-full rounded-4xl py-1 px-4"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="text-brand-600 hover:bg-brand-300 hover:text-white cursor-pointer h-full rounded-4xl py-1 px-4"
          onClick={() => scrollToSection("contacts")}
        >
          Contacts
        </button>
      </div>
      {/* <div className="text-brand-600 flex flex-row gap-2 items-center justify-center">
        Profile
      </div> */}
    </div>
  );
}
