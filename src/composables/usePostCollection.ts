import type { Post } from "~/types/post";

export const usePostCollection = async () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return await useAsyncData(route.fullPath, async () => {
    const client = contentfulClient();

    const postCollection = await client.getEntries<Post>({
      content_type: runtimeConfig.contentfulMainTypeId,
      order: "-sys.createdAt",
      limit: 10,
    });

    return {
      posts: postCollection.items,
      total: postCollection.total,
    };
  });
};
