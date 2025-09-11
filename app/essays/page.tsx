// app/essays/page.tsx
import data from "@/data";
import Link from "next/link";

export default function EssaysPage() {
  return (
    <section className="bg-zinc-950 text-zinc-200 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-merriweather text-3xl font-bold text-amber-200 mb-10">
          Essays
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {data.essays.map((essay) => (
            <div
              key={essay.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow hover:border-amber-400/30 transition"
            >
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                {essay.title}
              </h2>
              <p className="text-zinc-400 mb-4">{essay.description}</p>
              <Link
                href={`/essays/${essay.slug}`}
                className="text-amber-300 hover:text-amber-400 transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
