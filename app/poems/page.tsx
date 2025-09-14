import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Sidebar from "@/components/sections/Sidebar";

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
    <main className="min-h-screen bg-[#ecede8] text-[#21201f] relative">
      {/* Navbar */}
      <Navbar />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#e34e30] mb-10">Poems</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {poems.map((poem) => (
              <div
                key={poem.slug}
                className="bg-white border border-zinc-300 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-[#e34e30]/40 transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-[#21201f] mb-2">
                    {poem.title}
                  </h2>
                  <p className="text-sm text-zinc-600 mb-6">
                    {poem.description}
                  </p>
                </div>
                <Link
                  href={`/poems/${poem.slug}`}
                  className="text-[#e34e30] hover:opacity-80 font-medium text-sm transition mt-auto"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <Sidebar />
    </main>
  );
}
