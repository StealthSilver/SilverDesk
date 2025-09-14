"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#21201f] shadow-md font-[var(--font-snippet)]">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4">
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="MyBlog Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <div className="flex gap-6 text-lg font-bold">
          <Link href="/essays" className="hover:text-[#e34e30] transition">
            Essays
          </Link>
          <Link href="/stories" className="hover:text-[#e34e30] transition">
            Stories
          </Link>
          <Link href="/poems" className="hover:text-[#e34e30] transition">
            Poems
          </Link>
          <Link href="/books" className="hover:text-[#e34e30] transition">
            Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
