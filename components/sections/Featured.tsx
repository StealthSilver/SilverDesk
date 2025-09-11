import React from "react";
import Link from "next/link";

const featuredItems = [
  {
    title: "The Essence of Quiet Thinking",
    category: "Essay",
    description:
      "Exploring the art of slowing down in a world of endless motion.",
    link: "/essays/quiet-thinking",
  },
  {
    title: "The River Beyond the Hills",
    category: "Story",
    description: "A tale of memory, longing, and rediscovery.",
    link: "/stories/river-beyond",
  },
  {
    title: "Ashes of Tomorrow",
    category: "Poem",
    description: "Verses born from silence and subtle flame.",
    link: "/poems/ashes-of-tomorrow",
  },
];

const Featured = () => {
  return (
    <section className="bg-black text-zinc-200 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-200 mb-10 tracking-tight">
          Featured Writings
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-amber-400/30 transition"
            >
              <p className="text-sm text-amber-400 mb-2 uppercase tracking-wide">
                {item.category}
              </p>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-6">{item.description}</p>
              <Link
                href={item.link}
                className="text-amber-300 hover:text-amber-400 font-medium text-sm transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
