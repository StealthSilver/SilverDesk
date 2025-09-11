import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function PoemsPage() {
  const poemsDir = path.join(process.cwd(), "content/poems");
  const files = fs.readdirSync(poemsDir);

  const poems = files.map((filename) => {
    const filePath = path.join(poemsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "Untitled",
      description: data.description || data.excerpt || "",
    };
  });

  return (
    <section className="bg-zinc-950 text-zinc-200 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-merriweather text-3xl font-bold text-amber-200 mb-10">
          Poems
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {poems.map((poem) => (
            <div
              key={poem.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow hover:border-amber-400/30 transition"
            >
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                {poem.title}
              </h2>
              <p className="text-zinc-400 mb-4">{poem.description}</p>
              <Link
                href={`/poems/${poem.slug}`}
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
