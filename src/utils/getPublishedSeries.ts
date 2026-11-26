import { getCollection } from "astro:content";
import { postFilter } from "./postFilter";

const series = [
  { slug: "spring", title: "重学 Spring", tag: "重学 Spring" },
  { slug: "ai-application", title: "AI 应用开发", tag: "AI应用开发" },
  { slug: "distributed-systems", title: "分布式", tag: "分布式" },
];

export async function getPublishedSeries() {
  const posts = await getCollection("posts", postFilter);

  return series
    .map(({ slug, title, tag }) => ({
      slug,
      title,
      posts: posts
        .filter(({ data }) => data.tags.includes(tag))
        .sort(
          (a, b) => a.data.pubDatetime.getTime() - b.data.pubDatetime.getTime()
        ),
    }))
    .filter(({ posts }) => posts.length > 0);
}
