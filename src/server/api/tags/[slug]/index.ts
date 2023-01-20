import { createClient } from "@/server/utils/contentful";
import type { Post } from "@/types/post";
import type { Tag } from "@/types/tag";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();

  const tags = await client.getEntries<Tag>({
    content_type: runtimeConfig.contentfulTagsTypeId,
    "fields.slug": event.context.params.slug,
  });

  const posts = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulPostsTypeId,
    order: "-sys.createdAt",
    "fields.tags.sys.id": tags.items[0].sys.id,
  });

  return {
    items: posts.items,
  };
});
