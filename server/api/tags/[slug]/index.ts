export default defineEventHandler(async (event) => {
  const client = createClient();

  const posts = await client.getEntries<Post>({
    content_type: "posts",
    order: ["-sys.createdAt"],
    "metadata.tags.sys.id[all]": [event.context.params?.slug || ""],
  });

  return {
    items: posts.items,
  };
});
