import { createClient } from "~/server/utils/contentful";
import { markdownToHtml } from "~/server/utils/markdown";
import type { Post } from "~/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();

  const post = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulMainTypeId,
    "fields.slug": event.context.params.slug,
  });

  return {
    item: post.items[0],
    htmlContent: await markdownToHtml(post.items[0].fields.body),
  };
});
