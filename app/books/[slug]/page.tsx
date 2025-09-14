import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Sidebar from "@/components/sections/Sidebar";

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/books", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="relative min-h-screen bg-[#ecede8] text-[#21201f]">
      <Sidebar />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-[var(--font-parisienne)] text-[#e34e30] mb-8 text-center leading-tight">
          {data.title}
        </h1>

        {data.date && (
          <p className="text-sm text-zinc-600 mb-4 text-center">{data.date}</p>
        )}

        {data.tags && (
          <div className="mb-12 flex justify-center gap-2 flex-wrap">
            {data.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-[#e34e30]/10 text-[#e34e30] text-xs uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="prose prose-lg max-w-none font-[var(--font-palanquin)] leading-relaxed text-justify
                     prose-headings:font-bold prose-headings:text-[#21201f]
                     prose-p:mb-6 prose-p:text-lg prose-p:leading-8
                     prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-[#e34e30]
                     prose-blockquote:bg-[#e34e30]/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-md
                     prose-strong:text-[#e34e30]"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
