import { createClient } from "~/server/utils/contentful";
import type { Post } from "~/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();
  const query = getQuery(event);

  const page = Number(event.context.params.page) || 1;
  const perPage = Number(query.perPage) || 7;

  const { items, total } = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulPostsTypeId,
    order: "-sys.createdAt",
    skip: (page - 1) * perPage,
    limit: perPage,
  });

  return {
    items,
    total,
  };
});
