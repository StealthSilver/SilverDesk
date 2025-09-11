import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

export default async function PoemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/poems", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="bg-zinc-950 text-zinc-200 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="font-merriweather text-3xl font-bold text-amber-200 mb-6">
          {data.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  );
}
