"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 text-amber-200 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-amber-400 hover:text-amber-300 transition"
        >
          MyBlog
        </Link>

        {/* Nav Links */}
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
