import { createClient } from "~/server/utils/contentful";
import type { Post } from "~/types/post";

export default defineEventHandler(async () => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();

  const { items, total } = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulMainTypeId,
    order: "-sys.createdAt",
    limit: 10,
  });

  return {
    items,
    total,
  };
});
