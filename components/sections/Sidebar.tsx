"use client";

import React from "react";
import { Mail, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-16 border-l border-[#21201f] flex flex-col items-center justify-center gap-8 text-[#21201f] shadow-lg">
      <Link
        href="mailto:intersectinglines1005@mail.com"
        target="_blank"
        className="hover:text-[#e34e30] transition"
      >
        <Mail className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.instagram.com/_intersectinglines/"
        target="_blank"
        className="hover:text-[#e34e30] transition"
      >
        <Instagram className="w-6 h-6" />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className="hover:text-[#e34e30] transition"
      >
        <Twitter className="w-6 h-6" />
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        className="hover:text-[#e34e30] transition"
      >
        <Youtube className="w-6 h-6" />
      </Link>
    </aside>
  );
};

export default Sidebar;
