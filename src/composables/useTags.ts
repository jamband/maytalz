import type { Post } from "~/types/post";

export const useTags = async () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return await useAsyncData(route.fullPath, async () => {
    const client = contentfulClient();

    const tags = await client.getEntries<Post>({
      content_type: runtimeConfig.contentfulTagTypeId,
      "fields.slug": route.params.slug,
    });

    const posts = await client.getEntries<Post>({
      content_type: runtimeConfig.contentfulMainTypeId,
      order: "-sys.createdAt",
      "fields.tags.sys.id": tags.items[0].sys.id,
    });

    return posts.items;
  });
};
