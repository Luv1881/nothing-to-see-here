import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  date: string;
  preview: string;
  slug: string;
  tags?: string[];
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: { ...data, slug: realSlug } as PostMeta,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const { meta } = getPostBySlug(file);
      return meta;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  
  return posts;
}
