import { createClient } from "~/server/utils/contentful";
import { extractOpenGraphImage } from "~/server/utils/helpers";
import markdownToHtml from "~/server/utils/markdown-to-html";
import type { Post } from "~/types/post";

export default defineEventHandler(async (event) => {
  const client = createClient();
  const runtimeConfig = useRuntimeConfig();

  const post = await client.getEntries<Post>({
    content_type: runtimeConfig.contentfulPostsTypeId,
    "fields.slug": event.context.params.slug,
  });

  const htmlContent = await markdownToHtml(post.items[0].fields.body);

  return {
    item: post.items[0],
    htmlContent,
    openGraphImage: extractOpenGraphImage(htmlContent),
  };
});
