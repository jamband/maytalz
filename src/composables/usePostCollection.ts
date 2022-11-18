import contentful, { createClient } from "contentful";
import type { Post } from "~/types/post";

export const usePostCollection = async () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return await useAsyncData(route.fullPath, async () => {
    const createClientFn =
      process.env.NODE_ENV === "development"
        ? createClient
        : contentful.createClient;

    return await createClientFn({
      space: runtimeConfig.contentfulSpaceId,
      accessToken: runtimeConfig.contentfulAccessToken,
    })
      .getEntries<Post>({
        content_type: runtimeConfig.contentfulMainTypeId,
        order: "-sys.createdAt",
        limit: 10,
      })
      .then((entries) => {
        return {
          posts: entries.items,
          total: entries.total,
        };
      });
  });
};
