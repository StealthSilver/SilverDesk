import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function StoriesPage() {
  const storiesDir = path.join(process.cwd(), "content/stories");
  const files = fs.readdirSync(storiesDir);

  const stories = files.map((filename) => {
    const filePath = path.join(storiesDir, filename);
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
          stories
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow hover:border-amber-400/30 transition"
            >
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                {story.title}
              </h2>
              <p className="text-zinc-400 mb-4">{story.description}</p>
              <Link
                href={`/stories/${story.slug}`}
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
