import { createClient } from "@/server/utils/contentful";
import type { Post } from "@/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();
  const query = getQuery(event);

  const { items, total } = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulPostsTypeId,
    order: "-sys.createdAt",
    limit: Number(query.perPage) || 7,
  });

  return {
    items,
    total,
  };
});
