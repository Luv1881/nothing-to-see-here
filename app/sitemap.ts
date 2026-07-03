import { siteUrl } from "@/lib/site";
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/writing",
    "/now",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${BASE_URL}/writing/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
