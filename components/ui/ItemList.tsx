// /components/ItemList.tsx
import React from "react";

interface Item {
  title: string;
  description: string;
}

const ItemList = ({ items, category }: { items: Item[]; category: string }) => {
  return (
    <section className="bg-zinc-950 text-zinc-200 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-merriweather text-3xl font-bold text-amber-200 mb-10">
          {category}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow hover:border-amber-400/30 transition"
            >
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                {item.title}
              </h2>
              <p className="text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
