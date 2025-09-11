"use client";

import React from "react";
import { Mail, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-16  border-l  flex flex-col items-center justify-center gap-8 text-amber-300 shadow-lg">
      <Link
        href="mailto:example@email.com"
        target="_blank"
        className="hover:text-amber-400 transition"
      >
        <Mail className="w-6 h-6" />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        className="hover:text-amber-400 transition"
      >
        <Instagram className="w-6 h-6" />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className="hover:text-amber-400 transition"
      >
        <Twitter className="w-6 h-6" />
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        className="hover:text-amber-400 transition"
      >
        <Youtube className="w-6 h-6" />
      </Link>
    </aside>
  );
};

export default Sidebar;
