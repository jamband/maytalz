import type { Post } from "~/types/post";

export const usePost = async () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return await useAsyncData(route.fullPath, async () => {
    const client = contentfulClient();

    const post = await client.getEntries<Post>({
      content_type: runtimeConfig.contentfulMainTypeId,
      "fields.slug": route.params.slug,
    });

    return post.items[0];
  });
};
