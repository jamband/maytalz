import { createClient } from "~/server/utils/contentful";
import type { Post } from "~/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();

  const tags = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulTagTypeId,
    "fields.slug": event.context.params.slug,
  });

  const posts = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulMainTypeId,
    order: "-sys.createdAt",
    "fields.tags.sys.id": tags.items[0].sys.id,
  });

  return {
    items: posts.items,
  };
});
