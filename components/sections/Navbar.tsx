"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full border-b shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="MyBlog Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <div className="flex gap-6 text-lg">
          <Link href="/essays" className="hover:text-amber-400 transition">
            Essays
          </Link>
          <Link href="/stories" className="hover:text-amber-400 transition">
            Stories
          </Link>
          <Link href="/poems" className="hover:text-amber-400 transition">
            Poems
          </Link>
          <Link href="/books" className="hover:text-amber-400 transition">
            Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
