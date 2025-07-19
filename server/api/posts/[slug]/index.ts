export default defineEventHandler(async (event) => {
  const client = createClient();

  const post = await client.getEntries<Post>({
    content_type: "posts",
    "fields.slug": event.context.params?.slug,
  });

  const htmlContent = await markdownToHtml(post.items[0]?.fields.body || "");

  return {
    item: post.items[0],
    htmlContent,
    openGraphImage: extractOpenGraphImage(htmlContent),
  };
});
