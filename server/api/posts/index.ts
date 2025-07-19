import type { Post } from "@/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const query = getQuery(event);

  const { items, total } = await client.getEntries<Post>({
    content_type: "posts",
    order: ["-sys.createdAt"],
    limit: Number(query.perPage) || 7,
  });

  return {
    items,
    total,
  };
});
